// IPL Mock Auction - Socket.io Client Logic
const socket = io();

// Client State
let franchises = [];
let humanTeams = [];
let humanPassedState = {};
let currentView = "welcome";
let currentPlayerIndex = -1;
let currentBid = 0.0;
let currentBidder = null;
let timeLeft = 10;
let timerDuration = 10;
let auctionActive = false;
let isPaused = false;
let currentAuctionPlayers = [];
let isSoundMuted = false;
let localIp = "localhost";
let audioCtx = null;
let userName = localStorage.getItem("ipl_auction_user_name") || "";
let clientNameMap = {};


// Client ID Generation and Registration
let clientId = localStorage.getItem("ipl_auction_client_id");
if (!clientId) {
  clientId = "client_" + Math.random().toString(36).substring(2, 11);
  localStorage.setItem("ipl_auction_client_id", clientId);
}
let clientTeamMap = {};
let myTeamId = null;

// Register client immediately
socket.emit('register-client', { clientId });

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupCatalogFilters();
  setupControlButtons();
  setupSoundToggle();
  setupLoginSubmit();
});

// Setup navigation events to sync views across devices (now local to each device)
function setupNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      renderView(tab.dataset.tab);
    });
  });
}

function setupControlButtons() {
  document.getElementById("btn-pause-resume").addEventListener("click", () => {
    socket.emit('toggle-pause');
  });
  document.getElementById("btn-skip").addEventListener("click", () => {
    socket.emit('skip-player');
  });

  // Speed controls
  document.querySelectorAll(".sim-speed-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      socket.emit('change-speed', { speedStr: btn.dataset.speed });
    });
  });
}

function setupLoginSubmit() {
  const loginBtn = document.getElementById("login-submit-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const input = document.getElementById("login-username");
      const nameVal = input.value.trim();
      if (!nameVal) {
        alert("Please enter your name to enter the auction room!");
        return;
      }
      userName = nameVal;
      localStorage.setItem("ipl_auction_user_name", userName);
      
      // Register nickname with server
      socket.emit('register-user', { clientId, userName });
      
      // Navigate to welcome lobby
      renderView("welcome");
    });
  }
}

// Render dynamic user bidding cards
function renderHumanControls() {
  const container = document.getElementById("multiplayer-controls-container");
  if (!container) return;

  container.innerHTML = "";
  
  if (!auctionActive || isPaused) {
    container.innerHTML = `<div style="text-align:center; color:var(--text-muted); font-size:0.85rem; padding:1.0rem; width:100%">
      ${isPaused ? 'Auction is Paused' : 'Auction room inactive. Join from lobby.'}
    </div>`;
    return;
  }

  if (currentPlayerIndex === -1) return;
  const player = currentAuctionPlayers[currentPlayerIndex];
  
  // If this device doesn't own a team, act as main display / spectator
  if (!myTeamId) {
    container.innerHTML = `<div style="text-align:center; color:var(--text-muted); font-size:0.85rem; padding:1.5rem; width:100%; border:1px dashed rgba(255,255,255,0.1); border-radius:12px">
      📢 <strong>Spectator Board</strong><br>
      <span style="font-size:0.75rem">Connect a phone or laptop to <code>http://${localIp}:3000</code> and claim a team to place bids!</span>
    </div>`;
    return;
  }

  // Renders the single controller card assigned to this client
  const teamId = myTeamId;
  const team = franchises.find(f => f.id === teamId);
  if (!team) return;

  const nextIncrement = calculateIncrement(currentBid);
  const potentialNewBid = currentBidder ? currentBid + nextIncrement : player.basePrice;
  const hasPassed = humanPassedState[teamId];
  
  const card = document.createElement("div");
  card.className = `multi-team-control-card single-device-controller ${hasPassed ? 'passed' : ''}`;
  card.style.setProperty("--team-color", team.color);
  card.style.width = "100%";
  card.style.maxWidth = "450px";
  card.style.margin = "0 auto";

  if (hasPassed) {
    card.innerHTML = `
      <div class="multi-team-card-header" style="justify-content: center; padding: 1rem 0;">
        <span class="multi-team-card-title" style="color: ${team.color}; font-size: 1.25rem;">${team.name}</span>
        <span class="multi-team-card-badge" style="background: var(--accent-red); margin-left: 8px;">PASSED</span>
      </div>
      <div style="font-size:0.9rem; color:var(--text-muted); text-align:center; padding: 1.0rem 0; font-weight:600">Folded this round</div>
    `;
  } else {
    const isHighestBidder = currentBidder === teamId;
    const canBid = canTeamBid(team, potentialNewBid, player);
    
    const bidBtnText = isHighestBidder 
      ? "🔥 YOU ARE HIGHEST" 
      : `PLACE BID: ${potentialNewBid.toFixed(2)} Cr`;
      
    const disableBid = isHighestBidder || !canBid;

    // Show details of team budget and squad count
    card.innerHTML = `
      <div class="multi-team-card-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 8px; margin-bottom: 12px;">
        <span class="multi-team-card-title" style="color: ${team.color}; font-size: 1.1rem; font-weight:800">${team.shortName} Controller</span>
        <div style="text-align: right; font-size: 0.75rem; color: var(--text-secondary)">
          Budget: <strong>${team.budget.toFixed(2)} Cr</strong> | Squad: <strong>${team.squad.length}/25</strong>
        </div>
      </div>
      <div class="multi-team-card-actions" style="flex-direction: column; gap: 10px;">
        <button class="multi-bid-btn" style="background-color: ${team.color}; width: 100%; height: 50px; font-size: 1.0rem; font-weight: 800; border-radius: 8px; border: none; color:#fff; cursor: pointer; transition: transform 0.1s;" ${disableBid ? 'disabled' : ''}>
          ${bidBtnText}
        </button>
        <button class="multi-pass-btn" style="width: 100%; height: 40px; font-size: 0.9rem; font-weight: 700; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color:#fff; cursor: pointer;">
          PASS / FOLD
        </button>
      </div>
    `;

    card.querySelector(".multi-bid-btn").addEventListener("click", () => {
      socket.emit('place-human-bid', { teamId, amount: potentialNewBid });
    });

    card.querySelector(".multi-pass-btn").addEventListener("click", () => {
      socket.emit('pass-human-bid', { teamId });
    });
  }

  container.appendChild(card);
  updateAdminControlsVisibility();
}

// Bidding utilities on client
function calculateIncrement(currentPrice) {
  if (currentPrice < 2.0) return 0.20;
  if (currentPrice < 5.0) return 0.50;
  return 1.00;
}

function canTeamBid(team, bidAmount, player) {
  if (team.budget < bidAmount) return false;
  if (team.squad.length >= 25) return false;
  if (player.country === "Overseas") {
    const overseasCount = team.squad.filter(p => p.country === "Overseas").length;
    if (overseasCount >= 8) return false;
  }
  const slotsRemainingForMin = Math.max(0, 15 - team.squad.length - 1);
  if (team.budget - bidAmount < slotsRemainingForMin * 0.20) return false;

  return true;
}

// Sync View Renderers
function renderView(viewId) {
  if (viewId === "live" && !myTeamId) {
    alert("Please select a franchise first to enter the live auction!");
    // Delay slightly to prevent render loop collisions
    setTimeout(() => {
      renderView("welcome");
    }, 100);
    return;
  }
  currentView = viewId;

  // Hide main header bar during Login view
  const header = document.querySelector("header");
  if (header) {
    if (viewId === "login") {
      header.style.display = "none";
    } else {
      header.style.display = "flex";
    }
  }
  
  // Update Navbar Active tab
  document.querySelectorAll(".nav-tab").forEach(tab => {
    if (tab.dataset.tab === viewId) tab.classList.add("active");
    else tab.classList.remove("active");
  });

  // Switch View Panels
  document.querySelectorAll(".view-panel").forEach(panel => {
    if (panel.id === `panel-${viewId}`) panel.classList.add("active");
    else panel.classList.remove("active");
  });

  // Update lobby status
  const headerWidget = document.getElementById("header-user-widget");
  if (headerWidget) {
    const isAdminDevice = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isAdminDevice) {
      // Map all claimed teams to their active user nicknames
      const activeFriendsList = Object.keys(clientTeamMap)
        .map(cid => {
          const name = clientNameMap[cid] || "Unnamed";
          const team = clientTeamMap[cid] || "None";
          return `<li style="display: flex; align-items: center; gap: 4px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 0.25rem 0.5rem; border-radius: 6px;"><span style="color: var(--text-primary); font-weight:600;">${name}</span> &bull; <strong style="color: var(--accent-gold);">${team}</strong></li>`;
        })
        .join("");

      headerWidget.style.display = "flex";
      headerWidget.innerHTML = `
        <div class="active-friends-panel" style="display: flex; flex-direction: column; gap: 0.25rem; align-items: flex-end;">
          <span style="color: var(--text-secondary); font-size: 0.65rem; text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">👥 Active Managers:</span>
          <ul style="list-style: none; margin: 0; padding: 0; display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end;">
            ${activeFriendsList || '<li style="color: var(--text-muted); font-size: 0.75rem;">Waiting for managers...</li>'}
          </ul>
        </div>
      `;
    } else {
      if (myTeamId) {
        headerWidget.style.display = "flex";
        headerWidget.innerHTML = `
          <div class="user-team-badge" style="background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.2); padding: 0.35rem 0.75rem; border-radius: 8px; font-size: 0.8rem; font-weight: 700; color: var(--accent-gold);">
            <span>Your Franchise: <strong>${myTeamId}</strong></span>
          </div>
        `;
      } else {
        headerWidget.style.display = "none";
      }
    }
  }

  // Refresh tab specifics
  if (viewId === "teams") {
    renderTeamHubs();
  } else if (viewId === "catalog") {
    renderPlayerCatalog();
  } else if (viewId === "stats") {
    renderStatsDashboard();
  }
}

// Render Welcome Lobby Screen
function renderWelcomeLobby() {
  const grid = document.getElementById("welcome-team-grid");
  if (!grid) return;

  grid.innerHTML = "";

  franchises.forEach(team => {
    // Find who claimed this team
    const claimerId = Object.keys(clientTeamMap).find(cid => clientTeamMap[cid] === team.id);
    const isMyTeam = claimerId === clientId;
    const isClaimedByOther = claimerId && !isMyTeam;
    
    const card = document.createElement("div");
    card.className = `lobby-team-card ${isMyTeam ? 'multi-selected' : ''}`;
    card.style.setProperty("--team-color", team.color);
    
    let btnText = "Claim Team";
    let btnClass = "lobby-team-claim-btn";
    if (isMyTeam) {
      btnText = "Release Team";
      btnClass = "lobby-team-claim-btn claimed";
    } else if (isClaimedByOther) {
      const otherName = clientNameMap[claimerId] || "Friend";
      btnText = `Taken by ${otherName}`;
      btnClass = "lobby-team-claim-btn taken";
    }

    card.innerHTML = `
      <div class="team-logo-small" style="--team-color: ${team.color}; border: none; background: transparent; display: flex; align-items: center; justify-content: center;">
        ${getTeamLogoHTML(team.id, 44, 44)}
      </div>
      <div class="team-select-name" style="margin-top: 4px; font-weight: 700; font-size: 0.95rem; text-align: center;">${team.shortName}</div>
      
      <button class="${btnClass}" ${isClaimedByOther ? 'disabled' : ''}>
        ${btnText}
      </button>

      <div class="lobby-purse-edit-wrapper">
        <span>Purse:</span>
        <input type="number" class="lobby-purse-input" value="${team.budget}" min="5" max="150" step="0.5" />
        <span>Cr</span>
      </div>
    `;

    // Claim / Release handler
    card.querySelector(".lobby-team-claim-btn").addEventListener("click", () => {
      if (isMyTeam) {
        socket.emit('claim-team', { clientId, teamId: null });
      } else if (!isClaimedByOther) {
        socket.emit('claim-team', { clientId, teamId: team.id });
      }
    });

    // Purse update handler
    const purseInput = card.querySelector(".lobby-purse-input");
    purseInput.addEventListener("change", () => {
      let val = parseFloat(purseInput.value);
      if (isNaN(val) || val < 5.0) {
        val = 5.0;
        purseInput.value = "5.0";
      }
      if (val > 150.0) {
        val = 150.0;
        purseInput.value = "150.0";
      }
      socket.emit('update-team-purse', { teamId: team.id, budget: val });
    });

    grid.appendChild(card);
  });

  const subtitle = document.querySelector(".welcome-subtitle");
  if (subtitle) {
    subtitle.innerHTML = "Select one or more franchises to be controlled by you and your friends (local multiplayer). Unselected teams will bid automatically as CPUs.";
  }

  const startBtn = document.getElementById("start-auction-btn");
  if (startBtn) {
    startBtn.disabled = humanTeams.length === 0;
    // Bind click once
    if (!startBtn.dataset.bound) {
      startBtn.addEventListener("click", () => {
        socket.emit('start-auction');
      });
      startBtn.dataset.bound = "true";
    }
  }
  updateAdminControlsVisibility();
}

// Render Current Player Card (Left Column)
function renderCurrentPlayerCard(player) {
  const cardContainer = document.getElementById("live-player-card-box");
  if (!player) {
    cardContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 0; color: var(--text-muted);">
        <p>No active player in bidding pool.</p>
      </div>
    `;
    return;
  }

  const statsRows = Object.entries(player.stats).map(([key, val]) => {
    const label = key.replace(/([A-Z])/g, ' $1');
    return `
      <div class="mini-stat-item">
        <span class="mini-stat-label">${label}</span>
        <span class="mini-stat-val">${val}</span>
      </div>
    `;
  }).join("");

  const type = getBowlingType(player.name, player.role);
  const roleText = type ? `${player.role} (${type})` : player.role;

  let nextPlayerHtml = "";
  const isAdmin = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  if (isAdmin) {
    const nextPlayer = currentAuctionPlayers.slice(currentPlayerIndex + 1).find(p => p.status === "Upcoming");
    if (nextPlayer) {
      const nextType = getBowlingType(nextPlayer.name, nextPlayer.role);
      const nextRoleText = nextType ? `${nextPlayer.role} (${nextType})` : nextPlayer.role;
      nextPlayerHtml = `
        <div class="next-player-preview-box" style="margin-top: 1.25rem; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 1rem;">
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-gold); font-weight: 700; display: block; margin-bottom: 0.5rem; text-align: center;">⏭️ Up Next</span>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
            <div style="width: 42px; height: 42px; border-radius: 8px; overflow: hidden; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.08); flex-shrink: 0; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 1.2rem;">${getRoleIcon(nextPlayer.role)}</span>
            </div>
            <div style="flex-grow: 1; min-width: 0;">
              <h4 style="font-size: 0.9rem; font-weight: 700; color: #fff; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${nextPlayer.name}</h4>
              <span style="font-size: 0.7rem; color: var(--text-secondary); display: block; margin-top: 2px;">${nextRoleText} &bull; RTG: ${nextPlayer.rating}</span>
            </div>
            <div style="text-align: right; flex-shrink: 0;">
              <span style="font-size: 0.65rem; color: var(--text-secondary); display: block; text-transform: uppercase;">Base</span>
              <strong style="font-size: 0.85rem; color: var(--accent-gold); font-family: var(--font-display);">${nextPlayer.basePrice.toFixed(2)} Cr</strong>
            </div>
          </div>
        </div>
      `;
    }
  }

  cardContainer.innerHTML = `
    <div class="player-card-container">
      <div class="player-image-box" style="padding: 0;">
        <span class="player-role-badge" style="z-index: 2;">
          ${getRoleIcon(player.role)} ${roleText}
        </span>
        <span class="player-rating-badge" style="z-index: 2;">${player.rating} RTG</span>
        ${getPlayerAvatarHTML(player.name, player.role)}
        <span class="player-country-badge" style="z-index: 2;">${player.country}</span>
      </div>
      <div class="player-info-details">
        <h2 class="player-name">${player.name}</h2>
        <div class="player-base-price">Base Price: <strong>${player.basePrice.toFixed(2)} Cr</strong></div>
      </div>
      <div class="player-stats-mini-grid">
        ${statsRows}
      </div>
    </div>
    ${nextPlayerHtml}
  `;

  updateMiniPlayerBanner(player);
}

// Update the horizontal mini player banner inside the Bidding Display Panel
function updateMiniPlayerBanner(player) {
  const banner = document.getElementById("current-player-mini-banner");
  if (!banner) return;
  if (!player) {
    banner.innerHTML = "";
    return;
  }
  const type = getBowlingType(player.name, player.role);
  const roleText = type ? `${player.role} (${type})` : player.role;
  banner.innerHTML = `
    <h3 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin: 0; font-family: var(--font-display); letter-spacing: -0.2px;">${player.name}</h3>
    <span style="font-size: 0.72rem; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; display: block; margin-top: 2px;">
      ${roleText} &bull; Rating: ${player.rating} &bull; Base: ${player.basePrice.toFixed(2)} Cr
    </span>
  `;
}

// Update Bid Display
function updateBidDisplay(amount, bidderId, statusText) {
  const valEl = document.getElementById("bid-display-value");
  const labelEl = document.getElementById("bid-display-label");
  const badgeEl = document.getElementById("bid-display-badge");
  const infoEl = document.getElementById("bid-display-info");
  
  if (statusText === "Completed") {
    valEl.innerHTML = "FINISH";
    labelEl.innerHTML = "AUCTION ENDED";
    badgeEl.style.display = "none";
    infoEl.style.display = "none";
    return;
  }

  valEl.innerHTML = amount > 0 ? `${amount.toFixed(2)} Cr` : `--`;
  badgeEl.innerHTML = statusText;
  badgeEl.style.display = "block";

  if (bidderId) {
    const team = franchises.find(f => f.id === bidderId);
    infoEl.style.display = "flex";
    infoEl.style.setProperty("--bidder-color", team.color);
    infoEl.innerHTML = `
      <div class="current-bidder-logo" style="background-color: transparent; border: none; display: flex; align-items: center; justify-content: center;">
        ${getTeamLogoHTML(team.id, 24, 24)}
      </div>
      <span>Current Bidder: <strong style="color: ${team.color}">${team.shortName}</strong></span>
    `;
  } else {
    infoEl.style.display = "none";
  }

  badgeEl.className = "status-badge";
  if (statusText === "SOLD") {
    badgeEl.style.backgroundColor = "var(--accent-green)";
    badgeEl.style.color = "var(--bg-primary)";
  } else if (statusText === "UNSOLD") {
    badgeEl.style.backgroundColor = "var(--accent-red)";
    badgeEl.style.color = "#fff";
  } else if (statusText.includes("GOING")) {
    badgeEl.style.backgroundColor = "var(--accent-gold)";
    badgeEl.style.color = "var(--bg-primary)";
  }
}

// Local Render Logs
function renderLogs(logsList) {
  const container = document.getElementById("auction-log-container");
  if (!container) return;

  container.innerHTML = "";
  logsList.forEach(log => {
    const item = document.createElement("div");
    item.className = `log-item ${log.type}-event`;
    if (log.color) item.style.setProperty("--team-color", log.color);
    item.innerHTML = `<span>[${log.time}] ${log.text}</span>`;
    container.appendChild(item);
  });
  container.scrollTop = container.scrollHeight;
}

function addLogUI(log) {
  const container = document.getElementById("auction-log-container");
  if (!container) return;

  const item = document.createElement("div");
  item.className = `log-item ${log.type}-event`;
  if (log.color) item.style.setProperty("--team-color", log.color);
  item.innerHTML = `<span>[${log.time}] ${log.text}</span>`;
  container.appendChild(item);
  container.scrollTop = container.scrollHeight;
}

// Update Timer Countdown Ring
function updateTimerUI() {
  const progressRing = document.getElementById("timer-progress-ring");
  const textDisplay = document.getElementById("timer-text-display");
  if (!progressRing || !textDisplay) return;

  textDisplay.innerHTML = `${timeLeft}s`;

  const percent = (timeLeft / timerDuration) * 100;
  progressRing.setAttribute("stroke-dasharray", `${percent}, 100`);

  if (timeLeft <= 3) progressRing.style.stroke = "var(--accent-red)";
  else if (timeLeft <= 6) progressRing.style.stroke = "var(--accent-gold)";
  else progressRing.style.stroke = "var(--accent-blue)";
}

// Sync speed selection button styles
function syncSpeedButtons() {
  document.querySelectorAll(".sim-speed-btn").forEach(btn => {
    let speedVal = 2000;
    if (timerDuration === 15) speedVal = 4000;
    else if (timerDuration === 6) speedVal = 1000;
    
    if (parseInt(btn.dataset.speed) === speedVal) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

// Franchise Hubs Roster Rendering
function renderTeamHubs() {
  const container = document.getElementById("team-hubs-container");
  if (!container) return;

  container.innerHTML = "";

  const rolesOrder = ["Batsman", "Wicketkeeper", "All-Rounder", "Bowler"];
  const roleLabels = {
    "Batsman": "Batsmen",
    "Wicketkeeper": "Wicketkeepers",
    "All-Rounder": "All-Rounders",
    "Bowler": "Bowlers"
  };

  franchises.forEach(team => {
    const isUser = humanTeams.includes(team.id);
    
    let squadListHtml = "";
    if (team.squad.length > 0) {
      rolesOrder.forEach(role => {
        const playersOfRole = team.squad.filter(p => p.role === role).sort((a,b) => b.soldPrice - a.soldPrice);
        if (playersOfRole.length > 0) {
          squadListHtml += `
            <div class="roster-role-group">
              <div class="roster-role-title">${roleLabels[role]} (${playersOfRole.length})</div>
              ${playersOfRole.map(p => `
                <div class="roster-item">
                  <span class="roster-player-name">
                    ${p.name} ${p.country === "Overseas" ? '<span style="font-size:0.7rem; color:var(--accent-gold); margin-left:3px;" title="Overseas Player">✈</span>' : ''}
                  </span>
                  <span class="roster-player-price">${p.soldPrice.toFixed(2)} Cr</span>
                </div>
              `).join("")}
            </div>
          `;
        }
      });
    } else {
      squadListHtml = `<div style="text-align:center; padding:2rem; color:var(--text-muted); font-size:0.8rem">No players bought yet.</div>`;
    }

    const budgetPercent = (team.budget / 100.0) * 100;
    const overseasCount = team.squad.filter(p => p.country === "Overseas").length;

    const claimerId = Object.keys(clientTeamMap).find(cid => clientTeamMap[cid] === team.id);
    const ownerName = claimerId ? (clientNameMap[claimerId] || "Friend") : "CPU Manager";

    const card = document.createElement("div");
    card.className = "franchise-card";
    card.style.setProperty("--team-color", team.color);
    card.innerHTML = `
      <div class="franchise-card-header">
        <div class="team-logo-small squad-info-trigger" data-team-id="${team.id}" title="Click to view full squad details" style="--team-color: ${team.color}; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
          ${getTeamLogoHTML(team.id, 44, 44)}
        </div>
        <div class="franchise-details" style="margin-left: 8px;">
          <h4 class="franchise-name" style="display: flex; align-items: center; gap: 4px;">
            ${team.name}
            ${isUser ? '<span style="font-size:0.75rem; color:var(--accent-gold); border:1px solid var(--accent-gold); padding:1px 4px; border-radius:4px;">HUMAN</span>' : ''}
            <span class="squad-info-trigger-icon" data-team-id="${team.id}" title="Click to view full squad details" style="cursor: pointer; font-size: 0.85rem; opacity: 0.5; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.5'">ℹ️</span>
          </h4>
          <span class="franchise-owner">Owner: ${ownerName}</span>
        </div>
      </div>
      <div class="franchise-metrics">
        <div class="metric-row">
          <span class="metric-label">Remaining Budget:</span>
          <span class="metric-value budget">${team.budget.toFixed(2)} Cr</span>
        </div>
        <div class="budget-progress-container">
          <div class="budget-progress-bar" style="width: ${budgetPercent}%; background: ${team.color}"></div>
        </div>
        <div class="metric-row">
          <span class="metric-label">Squad Size:</span>
          <span class="metric-value">${team.squad.length} / 25</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Overseas Players:</span>
          <span class="metric-value">${overseasCount} / 8</span>
        </div>
      </div>
      <div class="franchise-roster-summary">
        <div class="roster-list" style="margin-top: 10px;">
          ${squadListHtml}
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Attach click listeners to team logos and info icons
  container.querySelectorAll(".squad-info-trigger, .squad-info-trigger-icon").forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const teamId = el.getAttribute("data-team-id");
      openFullSquadModal(teamId);
    });
  });
}

// Catalog Search / Filtering
function setupCatalogFilters() {
  document.getElementById("catalog-search").addEventListener("input", renderPlayerCatalog);
  document.getElementById("catalog-filter-role").addEventListener("change", renderPlayerCatalog);
  document.getElementById("catalog-filter-status").addEventListener("change", renderPlayerCatalog);
}

function renderPlayerCatalog() {
  const container = document.getElementById("catalog-players-container");
  if (!container) return;

  container.innerHTML = "";

  const search = document.getElementById("catalog-search").value.toLowerCase();
  const roleFilter = document.getElementById("catalog-filter-role").value;
  const statusFilter = document.getElementById("catalog-filter-status").value;

  const filtered = currentAuctionPlayers.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search);
    const matchesRole = roleFilter === "All" || p.role === roleFilter;
    
    let matchesStatus = true;
    if (statusFilter === "Sold") matchesStatus = p.status === "Sold";
    else if (statusFilter === "Unsold") matchesStatus = p.status === "Unsold";
    else if (statusFilter === "Upcoming") matchesStatus = p.status === "Upcoming" || p.status === "Bidding";

    return matchesSearch && matchesRole && matchesStatus;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-muted)">No players match.</div>`;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = `catalog-card ${p.status.toLowerCase()}`;
    
    let statusDetail = `<div class="catalog-stat-row"><span style="color:var(--text-secondary)">Base Price:</span><strong>${p.basePrice.toFixed(2)} Cr</strong></div>`;
    if (p.status === "Sold") {
      const team = franchises.find(f => f.id === p.soldTo);
      statusDetail = `
        <div class="catalog-stat-row">
          <span style="color:var(--text-secondary)">Sold to:</span>
          <strong style="color: ${team.color}">${team.shortName}</strong>
        </div>
        <div class="catalog-stat-row">
          <span style="color:var(--text-secondary)">Price:</span>
          <strong style="color: var(--accent-gold)">${p.soldPrice.toFixed(2)} Cr</strong>
        </div>
      `;
    }

    const type = getBowlingType(p.name, p.role);
    const roleText = type ? `${p.role} (${type})` : p.role;

    card.innerHTML = `
      <div class="catalog-card-header">
        <div>
          <h4 class="catalog-player-name">${p.name}</h4>
          <div class="catalog-player-meta">
            <span>${roleText}</span>
            <span>&bull;</span>
            <span>${p.country}</span>
          </div>
        </div>
      </div>
      <div style="font-size: 0.8rem; margin-top:0.5rem; color: var(--text-secondary)">
        Rating: <strong style="color:#fff">${p.rating}</strong>
      </div>
      <div class="catalog-card-body">
        ${statusDetail}
      </div>
    `;
    container.appendChild(card);
  });
}

// Insights / Stats rendering
function renderStatsDashboard() {
  const totalBids = currentAuctionPlayers.filter(p => p.status === "Sold").length;
  const totalSpent = currentAuctionPlayers.reduce((acc, p) => acc + (p.soldPrice || 0), 0);
  
  const soldPlayers = currentAuctionPlayers.filter(p => p.status === "Sold");
  const highestBuy = soldPlayers.length > 0 
    ? [...soldPlayers].sort((a,b) => b.soldPrice - a.soldPrice)[0]
    : null;

  const biggestSpender = [...franchises].sort((a,b) => (100.0 - a.budget) - (100.0 - b.budget))[0];

  document.getElementById("stat-total-sold").innerHTML = totalBids;
  document.getElementById("stat-total-spent").innerHTML = `${totalSpent.toFixed(2)} Cr`;
  document.getElementById("stat-highest-buy").innerHTML = highestBuy 
    ? `${highestBuy.name} (${highestBuy.soldPrice.toFixed(2)} Cr)`
    : "None";
  document.getElementById("stat-biggest-spender").innerHTML = biggestSpender && biggestSpender.budget < 100.0
    ? `${biggestSpender.shortName} (${(100.0 - biggestSpender.budget).toFixed(2)} Cr)`
    : "None";

  // Dynamically update total pool count sublabel
  const poolSub = document.querySelector(".stat-summary-card .stat-summary-sub");
  if (poolSub) {
    poolSub.innerHTML = `out of ${currentAuctionPlayers.length} in the pool`;
  }

  const topBuysContainer = document.getElementById("top-buys-list-box");
  topBuysContainer.innerHTML = "";
  
  const top5 = [...soldPlayers].sort((a,b) => b.soldPrice - a.soldPrice).slice(0, 5);
  if (top5.length === 0) {
    topBuysContainer.innerHTML = `<div style="text-align:center; padding:1.5rem; color:var(--text-muted); font-size:0.85rem">No sales completed yet.</div>`;
  } else {
    top5.forEach((p, idx) => {
      const team = franchises.find(f => f.id === p.soldTo);
      const item = document.createElement("div");
      item.className = "top-buy-item";
      item.innerHTML = `
        <div class="top-buy-rank">#${idx + 1}</div>
        <div class="top-buy-player-details">
          <div class="top-buy-player-name">${p.name}</div>
          <div class="top-buy-team-info" style="color: ${team.color}">Bought by ${team.shortName} &bull; ${p.role}</div>
        </div>
        <div class="top-buy-price">${p.soldPrice.toFixed(2)} Cr</div>
      `;
      topBuysContainer.appendChild(item);
    });
  }

  const budgetBreakdownContainer = document.getElementById("budget-breakdown-box");
  budgetBreakdownContainer.innerHTML = "";

  franchises.forEach(team => {
    const spent = 100.0 - team.budget;
    const squadSize = team.squad.length;
    const barColor = team.color;

    const row = document.createElement("div");
    row.style.marginBottom = "1rem";
    row.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.25rem">
        <span style="font-weight:600; color:${team.color}">${team.shortName}</span>
        <span style="color:var(--text-secondary)">Spent: ${spent.toFixed(2)} Cr (${squadSize} players)</span>
      </div>
      <div class="budget-progress-container" style="height:10px">
        <div class="budget-progress-bar" style="width: ${spent}%; background: ${barColor}"></div>
      </div>
    `;
    budgetBreakdownContainer.appendChild(row);
  });
}

function getRoleIcon(role) {
  if (role === "Batsman") return "🏏";
  if (role === "Bowler") return "🍒";
  if (role === "All-Rounder") return "⚡";
  if (role === "Wicketkeeper") return "🧤";
  return "👤";
}

// Get local image tag for players (supporting real headshots with dynamic client-side fallback)
function getPlayerAvatarHTML(name, role) {
  const cleanName = name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "_");
  
  let fallbackSrc = "assets/batsman.jpg";
  if (role === "Bowler") fallbackSrc = "assets/bowler.jpg";
  else if (role === "Wicketkeeper") fallbackSrc = "assets/wicketkeeper.jpg";
  else if (role === "All-Rounder") fallbackSrc = "assets/allrounder.jpg";
  
  const src = `assets/${cleanName}.jpg`;
  
  return `<img class="player-avatar-img" src="${src}" alt="${name}" onerror="this.onerror=null; this.src='${fallbackSrc}';" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px; filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));" />`;
}

// Get HTML image tag for official team logos
function getTeamLogoHTML(teamId, width = 36, height = 36) {
  const src = `assets/${teamId.toLowerCase()}_logo.svg`;
  return `<img class="team-logo-img" src="${src}" alt="${teamId}" style="width:${width}px; height:${height}px; object-fit:contain; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));" />`;
}

// Web Audio API Synthesizer for Auction Sound Effects
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  return audioCtx;
}

function playAuctionSound(type) {
  if (isSoundMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (type === "sold") {
      // Triumphant rising major chord (C4, E4, G4, C5)
      const notes = [261.63, 329.63, 392.00, 523.25];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.5);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.5);
      });
    } else if (type === "unsold") {
      // Disappointing falling double beep (G3 -> Eb3)
      const notes = [196.00, 155.56];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.18);
        
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(700, ctx.currentTime);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.18);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.18 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.18 + 0.4);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + idx * 0.18);
        osc.stop(ctx.currentTime + idx * 0.18 + 0.4);
      });
    } else if (type === "bid") {
      // Woodblock / Gavel strike wood sound (Triangle wave, rapid decay)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(800.00, ctx.currentTime);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === "tick") {
      // Clean short digital alert tick (1 kHz)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1000.00, ctx.currentTime);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    }
  } catch (e) {
    console.error("Audio Context failed to play sound:", e);
  }
}

// ----------------------------------------
// SOCKET.IO EVENT LISTENERS (SYNC FROM SERVER)
// ----------------------------------------

// Initial state sync
socket.on('init-state', (state) => {
  franchises = state.franchises;
  humanTeams = state.humanTeams;
  clientTeamMap = state.clientTeamMap || {};
  clientNameMap = state.clientNameMap || {};
  myTeamId = clientTeamMap[clientId] || null;
  localIp = state.localIp || window.location.hostname;
  humanPassedState = state.humanPassedState;
  currentView = state.currentView;
  currentPlayerIndex = state.currentPlayerIndex;
  currentBid = state.currentBid;
  currentBidder = state.currentBidder;
  timeLeft = state.timeLeft;
  timerDuration = state.timerDuration;
  auctionActive = state.auctionActive;
  isPaused = state.isPaused;
  currentAuctionPlayers = state.currentAuctionPlayers;
  
  // Check if we need to show the login screen first (for non-admin users without a userName)
  const isAdmin = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
  if (!isAdmin && !userName) {
    renderView("login");
  } else {
    // If they already have a username, register it on the server
    if (userName) {
      socket.emit('register-user', { clientId, userName });
    }
    renderView(currentView);
  }
  
  renderWelcomeLobby();
  renderLogs(state.logs);

  if (auctionActive && currentPlayerIndex > -1) {
    const player = currentAuctionPlayers[currentPlayerIndex];
    renderCurrentPlayerCard(player);
    updateBidDisplay(currentBid, currentBidder, currentBidder ? "LIVE BIDDING" : "LIVE");
    updateTimerUI();
    renderHumanControls();
  }
});

// Lobby Updates
socket.on('lobby-updated', ({ humanTeams: updatedTeams, clientTeamMap: updatedClientMap, clientNameMap: updatedNameMap, franchises: updatedFranchises }) => {
  humanTeams = updatedTeams;
  clientTeamMap = updatedClientMap || {};
  if (updatedNameMap) clientNameMap = updatedNameMap;
  myTeamId = clientTeamMap[clientId] || null;
  if (updatedFranchises) franchises = updatedFranchises;
  renderWelcomeLobby();
  renderHumanControls();
});

// View Syncs
socket.on('view-updated', ({ currentView: newView }) => {
  renderView(newView);
});

// New player start
socket.on('new-player-started', (state) => {
  franchises = state.franchises;
  humanTeams = state.humanTeams;
  humanPassedState = state.humanPassedState;
  currentPlayerIndex = state.currentPlayerIndex;
  currentBid = state.currentBid;
  currentBidder = state.currentBidder;
  timeLeft = state.timeLeft;
  auctionActive = state.auctionActive;
  isPaused = state.isPaused;

  const player = currentAuctionPlayers[currentPlayerIndex];
  renderCurrentPlayerCard(player);
  updateBidDisplay(currentBid, null, "LIVE");
  updateTimerUI();
  renderHumanControls();
  
  // Switch to live view automatically
  renderView("live");
  
  if (player) {
    const isFirstPlayer = currentPlayerIndex === 0;
    const prefixKn = isFirstPlayer ? "ನಮಸ್ಕಾರ ಕರ್ನಾಟಕ! ಐಪಿಎಲ್ ಹರಾಜಿಗೆ ಸ್ವಾಗತ! " : "";
    const prefixEn = isFirstPlayer ? "Hello Karnataka! Welcome to the IPL Mock Auction. " : "";
    
    const pName = player.name;
    const pRole = player.role;
    const baseP = player.basePrice.toFixed(2);
    
    const introKn = `${prefixKn}ಮುಂದಿನ ಆಟಗಾರ ${pName}. ರೋಲ್ ${pRole}. ಬೇಸ್ ಪ್ರೈಸ್ ${baseP} ಕೋಟಿ. ಹರಾಜು ಶುರು ಮಾಡೋಣ!`;
    const introEn = `${prefixEn}Next player is ${pName}. Role: ${pRole}. Base price: ${baseP} Crore. Let the bidding begin!`;
    
    speakKannada(introKn, introEn);
    addCommentaryToFeed(introKn, introEn);
  }
});

// Timer sync
socket.on('timer-ticked', ({ timeLeft: serverTimeLeft }) => {
  timeLeft = serverTimeLeft;
  updateTimerUI();
  
  // Warning ticks for final 3 seconds (3, 2, 1) on all devices
  if (timeLeft > 0 && timeLeft <= 3) {
    playAuctionSound("tick");
  }
});

// Bid sync
socket.on('bid-updated', ({ currentBid: sBid, currentBidder: sBidder, timeLeft: sTime }) => {
  currentBid = sBid;
  currentBidder = sBidder;
  timeLeft = sTime;

  updateBidDisplay(currentBid, currentBidder, "LIVE BIDDING");
  updateTimerUI();
  renderHumanControls();
  
  // Play dynamic bid gavel sound on all connected client devices
  playAuctionSound("bid");

  const team = franchises.find(f => f.id === currentBidder);
  const shortName = team ? team.shortName : currentBidder;
  
  const knBidPhrases = [
    `ಬಿಡ್ ಬಂತು! ${shortName} ಕಡೆಯಿಂದ ಬಿಡ್ ಬಂತು, ${currentBid.toFixed(2)} ಕೋಟಿ!`,
    `ಏನು ಬಿಡ್ಡಿಂಗ್ ಗುರು! ${shortName} ಅವರು ಬಿಡ್ ಮಾಡಿದ್ದಾರೆ, ${currentBid.toFixed(2)} ಕೋಟಿ!`,
    `ಬಿಡ್ಡಿಂಗ್ ನಿಲ್ಲುತ್ತಿಲ್ಲ! ${shortName} ಅವರು ಬಿಡ್ ಏರಿಸಿದ್ದಾರೆ, ${currentBid.toFixed(2)} ಕೋಟಿ!`
  ];
  const enBidPhrases = [
    `Bid is in! ${shortName} bids ${currentBid.toFixed(2)} Crore!`,
    `What a bidding war! ${shortName} raises it to ${currentBid.toFixed(2)} Crore!`,
    `The bid goes up! ${shortName} places a bid of ${currentBid.toFixed(2)} Crore!`
  ];
  const idx = Math.floor(Math.random() * knBidPhrases.length);
  speakKannada(knBidPhrases[idx], enBidPhrases[idx]);
  addCommentaryToFeed(knBidPhrases[idx], enBidPhrases[idx]);
});

// Pass update sync
socket.on('pass-updated', ({ humanPassedState: updatedPassState }) => {
  humanPassedState = updatedPassState;
  renderHumanControls();
});

// Bidding Resolution (SOLD/UNSOLD)
socket.on('auction-resolved', ({ player, franchises: updatedFranchises, currentAuctionPlayers: updatedPlayers }) => {
  franchises = updatedFranchises;
  currentAuctionPlayers = updatedPlayers;
  
  // Find player locally and update status
  const localPlayer = currentAuctionPlayers.find(p => p.id === player.id);
  if (localPlayer) {
    localPlayer.status = player.status;
    localPlayer.soldTo = player.soldTo;
    localPlayer.soldPrice = player.soldPrice;
  }

  auctionActive = false;

  if (player.status === "Sold") {
    updateBidDisplay(player.soldPrice, player.soldTo, "SOLD");
    playAuctionSound("sold");

    const team = franchises.find(f => f.id === player.soldTo);
    const shortName = team ? team.shortName : player.soldTo;
    const knSold = `ಸೋಲ್ಡ್! ಸಕ್ಕತ್ ಖರೀದಿ! ${player.name} ಅವರು ${shortName} ಪಾಲು ಆದರು, ${player.soldPrice.toFixed(2)} ಕೋಟಿಗೆ!`;
    const enSold = `SOLD! Superb buy! ${player.name} goes to ${shortName} for ${player.soldPrice.toFixed(2)} Crore!`;
    speakKannada(knSold, enSold);
    addCommentaryToFeed(knSold, enSold);
  } else {
    updateBidDisplay(0, null, "UNSOLD");
    playAuctionSound("unsold");

    const knUnsold = `ಅಯ್ಯೋ ಪಾಪ! ಯಾರೂ ಬಿಡ್ ಮಾಡಲಿಲ್ಲ! ${player.name} ಅನ್ಸೋಲ್ಡ್ ಆದರು.`;
    const enUnsold = `UNSOLD! No bids for ${player.name}. He goes unsold.`;
    speakKannada(knUnsold, enUnsold);
    addCommentaryToFeed(knUnsold, enUnsold);
  }
  
  renderHumanControls();
});

// Log added
socket.on('log-added', (logItem) => {
  addLogUI(logItem);
  
  if (logItem.type === "system") {
    if (logItem.text.includes("Going once")) {
      const knOnce = `ಒಂದನೇ ಸಲ! ಯಾರಾದರೂ ಬಿಡ್ ಮಾಡ್ತೀರಾ?`;
      const enOnce = `Going once at ${currentBid.toFixed(2)} Crore!`;
      speakKannada(knOnce, enOnce);
      addCommentaryToFeed(knOnce, enOnce);
    } else if (logItem.text.includes("Going twice")) {
      const knTwice = `ಎರಡನೇ ಸಲ! ಯಾರಾದರೂ ಬಿಡ್ ಮಾಡ್ತೀರಾ?`;
      const enTwice = `Going twice at ${currentBid.toFixed(2)} Crore!`;
      speakKannada(knTwice, enTwice);
      addCommentaryToFeed(knTwice, enTwice);
    }
  }
});

// Pause sync
socket.on('pause-toggled', ({ isPaused: serverPaused }) => {
  isPaused = serverPaused;
  const btn = document.getElementById("btn-pause-resume");
  if (isPaused) {
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
    `;
  } else {
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>
    `;
  }
  renderHumanControls();
});

// Speed settings sync
socket.on('speed-updated', ({ timerDuration: sDuration, timeLeft: sTime }) => {
  timerDuration = sDuration;
  timeLeft = sTime;
  updateTimerUI();
  syncSpeedButtons();
});

// Complete completion
socket.on('auction-completed', (state) => {
  auctionActive = false;
  renderCurrentPlayerCard(null);
  updateBidDisplay(0, null, "Completed");
  renderHumanControls();
});

// Sound Toggle Handler
function setupSoundToggle() {
  const btn = document.getElementById("btn-sound-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      isSoundMuted = !isSoundMuted;
      if (isSoundMuted) {
        btn.innerHTML = `<span id="sound-icon">🔇</span> Sound: OFF`;
        btn.style.borderColor = "var(--accent-red)";
        btn.style.color = "var(--accent-red)";
        // Instantly halt any active speech announcements
        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
      } else {
        btn.innerHTML = `<span id="sound-icon">🔊</span> Sound: ON`;
        btn.style.borderColor = "rgba(255,255,255,0.08)";
        btn.style.color = "var(--text-secondary)";
      }
    });
  }
}



// Detailed squad info popup modal
function openFullSquadModal(teamId) {
  const team = franchises.find(t => t.id === teamId);
  if (!team) return;

  const totalPlayers = team.squad.length;
  const overseasCount = team.squad.filter(p => p.country === "Overseas").length;
  const totalSpent = team.squad.reduce((sum, p) => sum + p.soldPrice, 0);

  const claimerId = Object.keys(clientTeamMap).find(cid => clientTeamMap[cid] === teamId);
  const ownerName = claimerId ? (clientNameMap[claimerId] || "Friend") : "CPU Manager";

  // Overlay container
  const overlay = document.createElement("div");
  overlay.className = "squad-modal-overlay";
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(4, 5, 10, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.25s ease;
  `;

  // Content card box
  const content = document.createElement("div");
  content.className = "squad-modal-content glass-panel";
  content.style.cssText = `
    width: 90%;
    max-width: 650px;
    max-height: 85vh;
    background: rgba(10, 14, 28, 0.85);
    backdrop-filter: blur(24px) saturate(170%);
    -webkit-backdrop-filter: blur(24px) saturate(170%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: scale(0.92);
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  `;

  // Render roles mapping
  const rolesOrder = ["Batsman", "Wicketkeeper", "All-Rounder", "Bowler"];
  const roleLabels = {
    "Batsman": "Batsmen",
    "Wicketkeeper": "Wicketkeepers",
    "All-Rounder": "All-Rounders",
    "Bowler": "Bowlers"
  };
  const roleEmojis = {
    "Batsman": "🏏",
    "Wicketkeeper": "🧤",
    "All-Rounder": "⚡",
    "Bowler": "🍒"
  };

  let rolesHtml = "";
  rolesOrder.forEach(role => {
    const players = team.squad.filter(p => p.role === role).sort((a,b) => b.soldPrice - a.soldPrice);
    if (players.length > 0) {
      rolesHtml += `
        <div style="margin-bottom: 1.5rem;">
          <h4 style="color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.35rem; margin-bottom: 0.75rem; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            <span>${roleEmojis[role]}</span> ${roleLabels[role]} (${players.length})
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px;">
            ${players.map(p => {
              const type = getBowlingType(p.name, p.role);
              const typeSuffix = type ? ` <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(${type})</span>` : "";
              return `
                <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 8px; padding: 0.65rem 0.85rem; display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-weight: 500; font-size: 0.9rem; color: #fff;">
                    ${p.name}${typeSuffix}
                    ${p.country === "Overseas" ? '<span style="font-size:0.75rem; color:var(--accent-gold); margin-left:4px;" title="Overseas Player">✈</span>' : ''}
                  </span>
                  <span style="font-family: var(--font-display); font-weight: 700; color: var(--accent-gold); font-size: 0.9rem;">
                    ${p.soldPrice.toFixed(2)} Cr
                  </span>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }
  });

  if (team.squad.length === 0) {
    rolesHtml = `
      <div style="text-align: center; padding: 3rem 0; color: var(--text-muted); font-size: 0.9rem;">
        No players purchased by this team yet.
      </div>
    `;
  }

  content.innerHTML = `
    <!-- Header -->
    <div style="padding: 1.5rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.01);">
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 46px; height: 46px; display: flex; align-items: center; justify-content: center;">
          ${getTeamLogoHTML(team.id, 46, 46)}
        </div>
        <div>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: #fff; margin: 0; line-height: 1.2;">
            ${team.name}
          </h3>
          <span style="font-size: 0.75rem; color: var(--text-muted);">Owner: ${ownerName}</span>
        </div>
      </div>
      <button class="modal-close-btn" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-secondary); cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.15)'; this.style.color='#fff';" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='var(--text-secondary)';">
        ✕
      </button>
    </div>

    <!-- Stats Panel -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; padding: 1rem 1.5rem; background: rgba(0,0,0,0.2); border-bottom: 1px solid rgba(255,255,255,0.04);">
      <div style="text-align: center;">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Purse Left</span>
        <strong style="font-family: var(--font-display); font-size: 1.05rem; color: var(--accent-gold);">${team.budget.toFixed(2)} Cr</strong>
      </div>
      <div style="text-align: center;">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Purse Spent</span>
        <strong style="font-family: var(--font-display); font-size: 1.05rem; color: #fff;">${totalSpent.toFixed(2)} Cr</strong>
      </div>
      <div style="text-align: center;">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Squad Size</span>
        <strong style="font-family: var(--font-display); font-size: 1.05rem; color: #fff;">${totalPlayers} / 25</strong>
      </div>
      <div style="text-align: center;">
        <span style="display: block; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Overseas</span>
        <strong style="font-family: var(--font-display); font-size: 1.05rem; color: #fff;">${overseasCount} / 8</strong>
      </div>
    </div>

    <!-- Scrollable Roster -->
    <div style="flex: 1; overflow-y: auto; padding: 1.5rem; scrollbar-width: thin;">
      ${rolesHtml}
    </div>
  `;

  overlay.appendChild(content);
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.style.opacity = "0";
    content.style.transform = "scale(0.92)";
    setTimeout(() => {
      overlay.remove();
    }, 250);
  };

  content.querySelector(".modal-close-btn").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // Force layout engine refresh
  overlay.offsetHeight;
  overlay.style.opacity = "1";
  content.style.transform = "scale(1)";
}

// Check roles and hide admin simulation bars for clients (Friends using phones or other laptops)
function updateAdminControlsVisibility() {
  const isAdmin = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  const simControls = document.querySelector(".sim-controls-bar");
  if (simControls) {
    if (isAdmin) {
      simControls.style.display = "flex";
    } else {
      simControls.style.display = "none";
    }
  }

  const startBtn = document.getElementById("start-auction-btn");
  if (startBtn) {
    if (isAdmin) {
      startBtn.style.display = "block";
    } else {
      startBtn.style.display = "none";
    }
  }

  // Restrict navigation tabs to Host Admin only (except the default Live Auction tab)
  const navTabs = document.querySelectorAll("#app-nav .nav-tab");
  navTabs.forEach(tab => {
    const tabName = tab.getAttribute("data-tab");
    if (tabName !== "live") {
      if (isAdmin) {
        tab.style.display = "";
      } else {
        tab.style.display = "none";
      }
    }
  });

  // Show the live current/upcoming player panel to all screens (Admin and Friends)
  const livePlayerPanel = document.getElementById("live-player-panel");
  const auctionGrid = document.querySelector(".auction-grid");
  if (livePlayerPanel) {
    livePlayerPanel.style.display = "flex";
    if (auctionGrid) {
      if (window.innerWidth > 1024) {
        auctionGrid.style.gridTemplateColumns = "350px 1fr 320px";
      } else {
        auctionGrid.style.gridTemplateColumns = ""; // mobile standard
      }
    }
  }
}

// Classify if bowler or allrounder is a spinner or pacer
function getBowlingType(name, role) {
  if (role !== "Bowler" && role !== "All-Rounder") return null;

  const nameLower = name.toLowerCase().trim();
  
  // List of prominent spinners and spinner keywords
  const spinners = [
    "chahal", "rashid khan", "chakaravarthy", "narine", "jadeja", "axar patel", 
    "bishnoi", "kuldeep", "hasaranga", "ashwin", "chahar", "theekshana", 
    "santner", "krunal", "sundar", "brar", "sai kishore", "gopal", "mishra", 
    "chawla", "noor ahmad", "ghazanfar", "phillips", "shahbaz", "markande", 
    "suyash sharma", "swapnil", "ansari", "harmeet", "kotian", "suthar", 
    "shokeen", "kartikeya", "murugan", "shakib", "moeen", "maxwell", 
    "livingstone", "raza", "markram", "abhishek sharma", "nitish rana", 
    "lalit yadav", "hooda", "gowtham", "zampa", "adil rashid", "shamsi", 
    "mujeeb", "sodhi", "maharaj", "hosein", "wellalage", "van der merwe",
    "allah", "ghazanfar", "bethell", "mandal", "nigam", "vijay", "gosh", 
    "ansari", "dubey", "sharma", "senanayake", "parag", "gopal"
  ];

  const isSpinner = spinners.some(keyword => nameLower.includes(keyword));
  return isSpinner ? "Spinner" : "Pacer";
}

// Render dynamic Kannada commentary log items to logs panel
function addCommentaryToFeed(knText, enText) {
  const container = document.getElementById("auction-log-container");
  if (!container) return;

  const logItem = document.createElement("div");
  logItem.className = "log-item kannada-commentary";
  logItem.style.borderLeft = "3px solid var(--accent-gold)";
  logItem.style.background = "rgba(255, 184, 0, 0.03)";
  logItem.style.padding = "0.4rem 0.65rem";
  logItem.style.borderRadius = "4px";
  logItem.style.marginTop = "4.6px";
  
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  logItem.innerHTML = `
    <span style="font-size: 0.7rem; color: var(--text-muted); margin-right: 6px;">[${time}]</span>
    <strong style="color: var(--accent-gold); font-size: 0.75rem; margin-right: 6px; text-transform: uppercase;">🎙️ Kannada:</strong>
    <span style="color: #fff; font-size: 0.8rem; font-style: italic;" title="${enText}">"${knText}"</span>
  `;
  container.appendChild(logItem);
  container.scrollTop = container.scrollHeight;
}

// Speak commentary text out loud in Kannada (using native voice or clean fallback)
function speakKannada(knText, enText) {
  if (isSoundMuted) return;

  try {
    const synth = window.speechSynthesis;
    if (!synth) return;

    // Interrupt preceding utterances to keep speech perfectly synchronized
    synth.cancel();

    const voices = synth.getVoices();
    
    // Scan for native Kannada (kn) voices
    const knVoices = voices.filter(v => v.lang.startsWith('kn') || v.name.toLowerCase().includes('kannada'));
    let targetVoice = null;
    
    if (knVoices.length > 0) {
      // Find a female Kannada voice (e.g., Shruti, Google, or any tagged female)
      targetVoice = knVoices.find(v => 
        v.name.toLowerCase().includes('shruti') || 
        v.name.toLowerCase().includes('google') || 
        v.name.toLowerCase().includes('female')
      ) || knVoices[0];
    }
    
    let utterance;
    if (targetVoice) {
      // System has a native Kannada commentator! Speak the native script.
      utterance = new SpeechSynthesisUtterance(knText);
      utterance.voice = targetVoice;
      utterance.lang = 'kn-IN';
      utterance.rate = 0.78;
    } else {
      // Fall back to clear English commentary with local terms so it doesn't sound garbled
      utterance = new SpeechSynthesisUtterance(enText);
      
      // Try to find a clear Indian English female voice first, otherwise general English female voice
      const inVoices = voices.filter(v => v.lang.startsWith('en-IN') || v.name.toLowerCase().includes('india'));
      let fallbackVoice = null;
      if (inVoices.length > 0) {
        fallbackVoice = inVoices.find(v => 
          v.name.toLowerCase().includes('heera') || 
          v.name.toLowerCase().includes('neerja') || 
          v.name.toLowerCase().includes('google') || 
          v.name.toLowerCase().includes('female')
        ) || inVoices[0];
      }
      
      if (!fallbackVoice) {
        // Find general English female voice (Zira, Samantha, Hazel, Susan, etc.)
        fallbackVoice = voices.find(v => {
          const name = v.name.toLowerCase();
          return v.lang.startsWith('en') && (
            name.includes('zira') || 
            name.includes('samantha') || 
            name.includes('hazel') || 
            name.includes('susan') || 
            name.includes('female')
          );
        });
      }
      
      if (fallbackVoice) {
        utterance.voice = fallbackVoice;
        utterance.lang = fallbackVoice.lang;
      }
      utterance.rate = 0.70; // Slower speed for absolute clarity
    }
    
    utterance.pitch = 1.0;
    synth.speak(utterance);
  } catch (e) {
    console.error("Speech Synthesis failed:", e);
  }
}

// Pre-fetch voices to guarantee web speech API registers them correctly
if (typeof window !== "undefined" && window.speechSynthesis) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}

// User-gesture audio unlocker for mobile devices (phones/safari)
function unlockBrowserAudio() {
  try {
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
    
    const synth = window.speechSynthesis;
    if (synth) {
      // Speak a silent empty utterance to unlock voice synthesis on iOS/Android
      const u = new SpeechSynthesisUtterance("");
      synth.speak(u);
    }
    
    // Remove listeners once successfully activated
    document.removeEventListener('click', unlockBrowserAudio);
    document.removeEventListener('touchstart', unlockBrowserAudio);
    console.log("Audio and Voice synthesis engines successfully unlocked by user interaction.");
  } catch (e) {
    console.warn("Failed to auto-unlock audio contexts:", e);
  }
}
document.addEventListener('click', unlockBrowserAudio);
document.addEventListener('touchstart', unlockBrowserAudio);









