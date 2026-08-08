import urllib.request
import urllib.parse
import json
import re
import os
import time

def clean_filename(name):
    return name.lower().replace('.', '').replace(' ', '_')

def main():
    players_js_path = '../players.js'
    assets_dir = '.'
    
    # Read players.js
    with open(players_js_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract names using regex
    player_names = re.findall(r'"name":\s*"([^"]+)"', content)
    player_names = list(set(player_names)) # unique
    print(f"Loaded {len(player_names)} players from players.js")
    
    # Check what we already have in assets
    existing_photos = [f.replace('.jpg', '') for f in os.listdir(assets_dir) if f.endswith('.jpg')]
    print(f"Already have {len(existing_photos)} photos in assets/")
    
    # Filter out players we already have
    to_download = [name for name in player_names if clean_filename(name) not in existing_photos]
    print(f"Attempting to download remaining {len(to_download)} player photos...")
    
    # Batch query in sizes of 50
    batch_size = 50
    total_downloaded = 0
    
    # We must use a compliant user agent as per MediaWiki policy
    headers = {
        'User-Agent': 'IPLMockAuctionScraper/2.0 (http://localhost:3000; contact: sidra@iplauction.com)'
    }
    
    for idx in range(0, len(to_download), batch_size):
        batch = to_download[idx : idx + batch_size]
        print(f"\nProcessing batch {idx // batch_size + 1} ({len(batch)} players)...")
        
        # Map player names to potential Wikipedia titles
        wiki_title_map = {}
        for name in batch:
            # Map clean name
            wiki_title = name.replace(' ', '_')
            wiki_title_map[name] = wiki_title
            
        titles_str = '|'.join(wiki_title_map.values())
        api_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(titles_str)}&prop=pageimages&pithumbsize=400&redirects=1&format=json"
        
        try:
            req = urllib.request.Request(api_url, headers=headers)
            with urllib.request.urlopen(req) as response:
                res_data = json.loads(response.read().decode())
                
            pages = res_data.get("query", {}).get("pages", {})
            redirects_list = res_data.get("query", {}).get("redirects", [])
            
            # Build redirects lookup
            redirect_map = {}
            for red in redirects_list:
                redirect_map[red.get("to")] = red.get("from")
                
            # Process returned pages
            for page_id, page_info in pages.items():
                if "thumbnail" in page_info:
                    img_url = page_info["thumbnail"]["source"]
                    final_title = page_info.get("title").replace(" ", "_")
                    
                    # Find which query name matched this title
                    original_name = None
                    
                    # 1. Direct match with final title
                    for query_name, wiki_title in wiki_title_map.items():
                        if wiki_title == final_title:
                            original_name = query_name
                            break
                            
                    # 2. Redirect match
                    if not original_name:
                        orig_title = redirect_map.get(page_info.get("title"))
                        if orig_title:
                            for query_name, wiki_title in wiki_title_map.items():
                                if wiki_title == orig_title.replace(" ", "_"):
                                    original_name = query_name
                                    break
                                    
                    # 3. Fallback match using title contains check
                    if not original_name:
                        for query_name in wiki_title_map:
                            if query_name.lower() in page_info.get("title", "").lower() or page_info.get("title", "").lower() in query_name.lower():
                                original_name = query_name
                                break
                                
                    if original_name:
                        target_filename = f"{clean_filename(original_name)}.jpg"
                        target_path = os.path.join(assets_dir, target_filename)
                        
                        try:
                            # Download the image
                            img_req = urllib.request.Request(img_url, headers=headers)
                            with urllib.request.urlopen(img_req) as img_resp:
                                with open(target_path, 'wb') as img_f:
                                    img_f.write(img_resp.read())
                            print(f"[OK] Downloaded: {original_name} -> {target_filename}")
                            total_downloaded += 1
                        except Exception as e:
                            print(f"[FAIL] Failed to save {original_name} image: {e}")
                            
        except Exception as e:
            print(f"Error querying batch API: {e}")
            
        # Delay to comply with robot policy
        time.sleep(1.5)
        
    print(f"\nDone! Downloaded {total_downloaded} new player photos.")

if __name__ == "__main__":
    main()
