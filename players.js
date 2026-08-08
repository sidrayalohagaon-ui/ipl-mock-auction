const players = [
  {
    "id": 1,
    "name": "Devon Conway",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 91,
    "basePrice": 2.0,
    "stats": {
      "matches": 120,
      "runs": 3000,
      "strikeRate": 142.0,
      "average": 35.7,
      "high": 89
    }
  },
  {
    "id": 2,
    "name": "Jake Fraser-McGurk",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 92,
    "basePrice": 2.0,
    "stats": {
      "matches": 131,
      "runs": 4650,
      "strikeRate": 131.5,
      "average": 30.1,
      "high": 93
    }
  },
  {
    "id": 3,
    "name": "Cameron Green",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 137,
      "runs": 5550,
      "strikeRate": 149.5,
      "average": 39.7,
      "high": 111
    }
  },
  {
    "id": 4,
    "name": "Sarfaraz Khan",
    "role": "Batsman",
    "country": "India",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 128,
      "runs": 4200,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 92
    }
  },
  {
    "id": 5,
    "name": "David Miller",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 131,
      "runs": 4650,
      "strikeRate": 142.0,
      "average": 35.7,
      "high": 100
    }
  },
  {
    "id": 6,
    "name": "Prithvi Shaw",
    "role": "Batsman",
    "country": "India",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 127,
      "runs": 4050,
      "strikeRate": 133.0,
      "average": 30.9,
      "high": 90
    }
  },
  {
    "id": 7,
    "name": "Gus Atkinson",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 134,
      "runs": 3320,
      "strikeRate": 158.4,
      "wickets": 77,
      "economy": 9.25
    }
  },
  {
    "id": 8,
    "name": "Wanindu Hasaranga",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 158.4,
      "wickets": 77,
      "economy": 9.25
    }
  },
  {
    "id": 9,
    "name": "Deepak Hooda",
    "role": "All-Rounder",
    "country": "India",
    "rating": 81,
    "basePrice": 0.75,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 10,
    "name": "Venkatesh Iyer",
    "role": "All-Rounder",
    "country": "India",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 129,
      "runs": 2920,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 11,
    "name": "Liam Livingstone",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 12,
    "name": "Wiaan Mulder",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 1.0,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 13,
    "name": "Rachin Ravindra",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 14,
    "name": "Finn Allen",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 91,
    "basePrice": 2.0,
    "stats": {
      "matches": 126,
      "runs": 4420,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 104
    }
  },
  {
    "id": 15,
    "name": "Jonny Bairstow",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 85,
    "basePrice": 1.0,
    "stats": {
      "matches": 114,
      "runs": 2980,
      "strikeRate": 125.0,
      "average": 26.0,
      "high": 79
    }
  },
  {
    "id": 16,
    "name": "K.S. Bharat",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 121,
      "runs": 3820,
      "strikeRate": 144.8,
      "average": 33.7,
      "high": 97
    }
  },
  {
    "id": 17,
    "name": "Quinton De Kock",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 84,
    "basePrice": 1.0,
    "stats": {
      "matches": 121,
      "runs": 3820,
      "strikeRate": 143.0,
      "average": 33.0,
      "high": 96
    }
  },
  {
    "id": 18,
    "name": "Ben Duckett",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 110,
      "runs": 2500,
      "strikeRate": 139.4,
      "average": 31.6,
      "high": 83
    }
  },
  {
    "id": 19,
    "name": "Rahmanullah Gurbaz",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 1.5,
    "stats": {
      "matches": 127,
      "runs": 4540,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 105
    }
  },
  {
    "id": 20,
    "name": "Jamie Smith",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 125,
      "runs": 4300,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 103
    }
  },
  {
    "id": 21,
    "name": "Gerald Coetzee",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 119,
      "wickets": 121,
      "economy": 8.59,
      "average": 27.5,
      "best": "4/27"
    }
  },
  {
    "id": 22,
    "name": "Akash Deep",
    "role": "Bowler",
    "country": "India",
    "rating": 83,
    "basePrice": 1.0,
    "stats": {
      "matches": 109,
      "wickets": 100,
      "economy": 7.27,
      "average": 22.0,
      "best": "3/16"
    }
  },
  {
    "id": 23,
    "name": "Jacob Duffy",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 117,
      "wickets": 118,
      "economy": 8.47,
      "average": 27.0,
      "best": "5/26"
    }
  },
  {
    "id": 24,
    "name": "Fazalhaq Farooqi",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 86,
    "basePrice": 1.0,
    "stats": {
      "matches": 107,
      "wickets": 111,
      "economy": 8.83,
      "average": 28.5,
      "best": "4/29"
    }
  },
  {
    "id": 25,
    "name": "Matt Henry",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 91,
    "basePrice": 2.0,
    "stats": {
      "matches": 118,
      "wickets": 115,
      "economy": 7.99,
      "average": 25.0,
      "best": "3/22"
    }
  },
  {
    "id": 26,
    "name": "Spencer Johnson",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 89,
    "basePrice": 1.5,
    "stats": {
      "matches": 110,
      "wickets": 113,
      "economy": 8.71,
      "average": 28.0,
      "best": "4/28"
    }
  },
  {
    "id": 27,
    "name": "Shivam Mavi",
    "role": "Bowler",
    "country": "India",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 108,
      "wickets": 102,
      "economy": 7.63,
      "average": 23.5,
      "best": "5/19"
    }
  },
  {
    "id": 28,
    "name": "Anrich Nortje",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 108,
      "wickets": 99,
      "economy": 7.27,
      "average": 22.0,
      "best": "5/16"
    }
  },
  {
    "id": 29,
    "name": "Matheesha Pathirana",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 91,
    "basePrice": 2.0,
    "stats": {
      "matches": 106,
      "wickets": 109,
      "economy": 8.71,
      "average": 28.0,
      "best": "3/28"
    }
  },
  {
    "id": 30,
    "name": "Ravi Bishnoi",
    "role": "Bowler",
    "country": "India",
    "rating": 91,
    "basePrice": 2.0,
    "stats": {
      "matches": 109,
      "wickets": 103,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 31,
    "name": "Rahul Chahar",
    "role": "Bowler",
    "country": "India",
    "rating": 82,
    "basePrice": 1.0,
    "stats": {
      "matches": 102,
      "wickets": 106,
      "economy": 8.83,
      "average": 28.5,
      "best": "5/29"
    }
  },
  {
    "id": 32,
    "name": "Akeal Hosein",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 117,
      "wickets": 110,
      "economy": 7.51,
      "average": 23.0,
      "best": "5/18"
    }
  },
  {
    "id": 33,
    "name": "Mujeeb Rahman",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 103,
      "wickets": 96,
      "economy": 7.51,
      "average": 23.0,
      "best": "3/18"
    }
  },
  {
    "id": 34,
    "name": "Maheesh Theekshana",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 109,
      "wickets": 102,
      "economy": 7.51,
      "average": 23.0,
      "best": "3/18"
    }
  },
  {
    "id": 35,
    "name": "Aarya Desai",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 126,
      "runs": 3900,
      "strikeRate": 137.5,
      "average": 33.3,
      "high": 92
    }
  },
  {
    "id": 36,
    "name": "Yash Dhull",
    "role": "Batsman",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 136,
      "runs": 5400,
      "strikeRate": 146.5,
      "average": 38.1,
      "high": 108
    }
  },
  {
    "id": 37,
    "name": "Abhinav Manohar",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 4800,
      "strikeRate": 148.0,
      "average": 38.9,
      "high": 105
    }
  },
  {
    "id": 38,
    "name": "Anmolpreet Singh",
    "role": "Batsman",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 4050,
      "strikeRate": 149.5,
      "average": 39.7,
      "high": 101
    }
  },
  {
    "id": 39,
    "name": "Atharva Taide",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 134,
      "runs": 5100,
      "strikeRate": 149.5,
      "average": 39.7,
      "high": 108
    }
  },
  {
    "id": 40,
    "name": "Abhinav Tejrana",
    "role": "Batsman",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 3150,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 85
    }
  },
  {
    "id": 41,
    "name": "Auqib Dar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 2760,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 42,
    "name": "Rajvardhan Hangargekar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.4,
    "stats": {
      "matches": 134,
      "runs": 3320,
      "strikeRate": 138.6,
      "wickets": 68,
      "economy": 7.9
    }
  },
  {
    "id": 43,
    "name": "Tanush Kotian",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 2360,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 44,
    "name": "Shivang Kumar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 147.4,
      "wickets": 72,
      "economy": 8.5
    }
  },
  {
    "id": 45,
    "name": "Mahipal Lomror",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.5,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 151.8,
      "wickets": 74,
      "economy": 8.8
    }
  },
  {
    "id": 46,
    "name": "Kamlesh Nagarkoti",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 2360,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 47,
    "name": "Vijay Shankar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 48,
    "name": "Sanvir Singh",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "runs": 2040,
      "strikeRate": 147.4,
      "wickets": 72,
      "economy": 8.5
    }
  },
  {
    "id": 49,
    "name": "Edhen Tom",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 131,
      "runs": 3080,
      "strikeRate": 140.8,
      "wickets": 69,
      "economy": 8.05
    }
  },
  {
    "id": 50,
    "name": "Prashant Veer",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 51,
    "name": "Ruchit Ahir",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 110,
      "runs": 2500,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 88
    }
  },
  {
    "id": 52,
    "name": "Vansh Bedi",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "runs": 3220,
      "strikeRate": 130.4,
      "average": 28.1,
      "high": 84
    }
  },
  {
    "id": 53,
    "name": "Mukul Choudhary",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "runs": 2980,
      "strikeRate": 137.6,
      "average": 30.9,
      "high": 86
    }
  },
  {
    "id": 54,
    "name": "Tushar Raheja",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 3100,
      "strikeRate": 135.8,
      "average": 30.2,
      "high": 86
    }
  },
  {
    "id": 55,
    "name": "Kartik Sharma",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "runs": 3460,
      "strikeRate": 146.6,
      "average": 34.4,
      "high": 95
    }
  },
  {
    "id": 56,
    "name": "Tejasvi Singh",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 3700,
      "strikeRate": 141.2,
      "average": 32.3,
      "high": 94
    }
  },
  {
    "id": 57,
    "name": "Raj Limbani",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 100,
      "wickets": 90,
      "economy": 7.15,
      "average": 21.5,
      "best": "3/15"
    }
  },
  {
    "id": 58,
    "name": "Akash Madhwal",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "wickets": 115,
      "economy": 8.11,
      "average": 25.5,
      "best": "5/23"
    }
  },
  {
    "id": 59,
    "name": "Sushant Mishra",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 110,
      "wickets": 104,
      "economy": 7.63,
      "average": 23.5,
      "best": "4/19"
    }
  },
  {
    "id": 60,
    "name": "Ashok Sharma",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 112,
      "wickets": 106,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 61,
    "name": "Simarjeet Singh",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 109,
      "wickets": 110,
      "economy": 8.47,
      "average": 27.0,
      "best": "3/26"
    }
  },
  {
    "id": 62,
    "name": "Naman Tiwari",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 102,
      "wickets": 106,
      "economy": 8.83,
      "average": 28.5,
      "best": "5/29"
    }
  },
  {
    "id": 63,
    "name": "Kartik Tyagi",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 109,
      "wickets": 101,
      "economy": 7.39,
      "average": 22.5,
      "best": "3/17"
    }
  },
  {
    "id": 64,
    "name": "Yash Raj Punja",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "wickets": 111,
      "economy": 7.75,
      "average": 24.0,
      "best": "4/20"
    }
  },
  {
    "id": 65,
    "name": "Vignesh Puthur",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 111,
      "wickets": 108,
      "economy": 7.99,
      "average": 25.0,
      "best": "5/22"
    }
  },
  {
    "id": 66,
    "name": "Karn Sharma",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.5,
    "stats": {
      "matches": 115,
      "wickets": 110,
      "economy": 7.75,
      "average": 24.0,
      "best": "3/20"
    }
  },
  {
    "id": 67,
    "name": "Shivam Shukla",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 105,
      "wickets": 97,
      "economy": 7.39,
      "average": 22.5,
      "best": "5/17"
    }
  },
  {
    "id": 68,
    "name": "Kumar Kartikeya Singh",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "wickets": 117,
      "economy": 8.35,
      "average": 26.5,
      "best": "5/25"
    }
  },
  {
    "id": 69,
    "name": "Prashant Solanki",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 108,
      "wickets": 111,
      "economy": 8.71,
      "average": 28.0,
      "best": "5/28"
    }
  },
  {
    "id": 70,
    "name": "Wahidullah Zadran",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "wickets": 105,
      "economy": 7.15,
      "average": 21.5,
      "best": "3/15"
    }
  },
  {
    "id": 71,
    "name": "Mayank Agarawal",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 135,
      "runs": 5250,
      "strikeRate": 143.5,
      "average": 36.5,
      "high": 105
    }
  },
  {
    "id": 72,
    "name": "Sediqullah Atal",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 139,
      "runs": 5850,
      "strikeRate": 143.5,
      "average": 36.5,
      "high": 109
    }
  },
  {
    "id": 73,
    "name": "Ackeem Auguste",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 133,
      "runs": 4950,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 97
    }
  },
  {
    "id": 74,
    "name": "Reeza Hendricks",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 1.0,
    "stats": {
      "matches": 123,
      "runs": 3450,
      "strikeRate": 139.0,
      "average": 34.1,
      "high": 90
    }
  },
  {
    "id": 75,
    "name": "Pathum Nissanka",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 123,
      "runs": 3450,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 87
    }
  },
  {
    "id": 76,
    "name": "Tim Robinson",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 134,
      "runs": 5100,
      "strikeRate": 133.0,
      "average": 30.9,
      "high": 97
    }
  },
  {
    "id": 77,
    "name": "Steve Smith",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 125,
      "runs": 3750,
      "strikeRate": 131.5,
      "average": 30.1,
      "high": 87
    }
  },
  {
    "id": 78,
    "name": "Rahul Tripathi",
    "role": "Batsman",
    "country": "India",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 137,
      "runs": 5550,
      "strikeRate": 146.5,
      "average": 38.1,
      "high": 109
    }
  },
  {
    "id": 79,
    "name": "Sean Abbott",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 126,
      "runs": 2680,
      "strikeRate": 147.4,
      "wickets": 72,
      "economy": 8.5
    }
  },
  {
    "id": 80,
    "name": "Michael Bracewell",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 134,
      "runs": 3320,
      "strikeRate": 138.6,
      "wickets": 68,
      "economy": 7.9
    }
  },
  {
    "id": 81,
    "name": "Ben Dwarshuis",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 86,
    "basePrice": 1.0,
    "stats": {
      "matches": 126,
      "runs": 2680,
      "strikeRate": 158.4,
      "wickets": 77,
      "economy": 9.25
    }
  },
  {
    "id": 82,
    "name": "Zak Foulkes",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 81,
    "basePrice": 0.75,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 140.8,
      "wickets": 69,
      "economy": 8.05
    }
  },
  {
    "id": 83,
    "name": "Jason Holder",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 84,
    "name": "Daryl Mitchell",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 92,
    "basePrice": 2.0,
    "stats": {
      "matches": 120,
      "runs": 2200,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 85,
    "name": "Daniel Sams",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 1.0,
    "stats": {
      "matches": 130,
      "runs": 3000,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 86,
    "name": "Dasun Shanaka",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 87,
    "name": "Matthew Short",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 88,
    "basePrice": 1.5,
    "stats": {
      "matches": 132,
      "runs": 3160,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 88,
    "name": "Tom Banton",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 120,
      "runs": 3700,
      "strikeRate": 146.6,
      "average": 34.4,
      "high": 97
    }
  },
  {
    "id": 89,
    "name": "Jordan Cox",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 0.75,
    "stats": {
      "matches": 112,
      "runs": 2740,
      "strikeRate": 130.4,
      "average": 28.1,
      "high": 80
    }
  },
  {
    "id": 90,
    "name": "Shai Hope",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 112,
      "runs": 2740,
      "strikeRate": 130.4,
      "average": 28.1,
      "high": 80
    }
  },
  {
    "id": 91,
    "name": "Josh Inglis",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 122,
      "runs": 3940,
      "strikeRate": 128.6,
      "average": 27.4,
      "high": 89
    }
  },
  {
    "id": 92,
    "name": "Benjamin McDermott",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 117,
      "runs": 3340,
      "strikeRate": 126.8,
      "average": 26.7,
      "high": 83
    }
  },
  {
    "id": 93,
    "name": "Kusal Mendis",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 111,
      "runs": 2620,
      "strikeRate": 134.0,
      "average": 29.5,
      "high": 81
    }
  },
  {
    "id": 94,
    "name": "Kusal Perera",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 85,
    "basePrice": 1.0,
    "stats": {
      "matches": 124,
      "runs": 4180,
      "strikeRate": 135.8,
      "average": 30.2,
      "high": 95
    }
  },
  {
    "id": 95,
    "name": "Tim Seifert",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 86,
    "basePrice": 1.5,
    "stats": {
      "matches": 114,
      "runs": 2980,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 92
    }
  },
  {
    "id": 96,
    "name": "Kyle Jamieson",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 112,
      "wickets": 106,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 97,
    "name": "Saqib Mahmood",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 1.5,
    "stats": {
      "matches": 103,
      "wickets": 93,
      "economy": 7.15,
      "average": 21.5,
      "best": "3/15"
    }
  },
  {
    "id": 98,
    "name": "Adam Milne",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 111,
      "wickets": 107,
      "economy": 7.87,
      "average": 24.5,
      "best": "5/21"
    }
  },
  {
    "id": 99,
    "name": "Lungisani Ngidi",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 111,
      "wickets": 107,
      "economy": 7.87,
      "average": 24.5,
      "best": "5/21"
    }
  },
  {
    "id": 100,
    "name": "William Orourke",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 91,
    "basePrice": 2.0,
    "stats": {
      "matches": 116,
      "wickets": 118,
      "economy": 8.59,
      "average": 27.5,
      "best": "4/27"
    }
  },
  {
    "id": 101,
    "name": "Mustafizur Rahman",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 119,
      "wickets": 121,
      "economy": 8.59,
      "average": 27.5,
      "best": "4/27"
    }
  },
  {
    "id": 102,
    "name": "Chetan Sakariya",
    "role": "Bowler",
    "country": "India",
    "rating": 82,
    "basePrice": 0.75,
    "stats": {
      "matches": 117,
      "wickets": 117,
      "economy": 8.35,
      "average": 26.5,
      "best": "5/25"
    }
  },
  {
    "id": 103,
    "name": "Kuldeep Sen",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 109,
      "wickets": 102,
      "economy": 7.51,
      "average": 23.0,
      "best": "3/18"
    }
  },
  {
    "id": 104,
    "name": "Umesh Yadav",
    "role": "Bowler",
    "country": "India",
    "rating": 87,
    "basePrice": 1.5,
    "stats": {
      "matches": 104,
      "wickets": 106,
      "economy": 8.59,
      "average": 27.5,
      "best": "4/27"
    }
  },
  {
    "id": 105,
    "name": "Qais Ahmad",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 81,
    "basePrice": 0.75,
    "stats": {
      "matches": 114,
      "wickets": 114,
      "economy": 8.35,
      "average": 26.5,
      "best": "5/25"
    }
  },
  {
    "id": 106,
    "name": "Rishad Hossain",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 101,
      "wickets": 97,
      "economy": 7.87,
      "average": 24.5,
      "best": "4/21"
    }
  },
  {
    "id": 107,
    "name": "Mohammad Waqar Salamkheil",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 84,
    "basePrice": 1.0,
    "stats": {
      "matches": 109,
      "wickets": 103,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 108,
    "name": "Viyaskanth Vijayakanth",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 0.75,
    "stats": {
      "matches": 113,
      "wickets": 109,
      "economy": 7.87,
      "average": 24.5,
      "best": "4/21"
    }
  },
  {
    "id": 109,
    "name": "Ankit Kumar",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 3000,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 84
    }
  },
  {
    "id": 110,
    "name": "Rohan Kunnummal",
    "role": "Batsman",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 4950,
      "strikeRate": 143.5,
      "average": 36.5,
      "high": 103
    }
  },
  {
    "id": 111,
    "name": "Danish Malewar",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 138,
      "runs": 5700,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 102
    }
  },
  {
    "id": 112,
    "name": "Pukhraj Mann",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 4500,
      "strikeRate": 143.5,
      "average": 36.5,
      "high": 100
    }
  },
  {
    "id": 113,
    "name": "Salman Nizar",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 134,
      "runs": 5100,
      "strikeRate": 139.0,
      "average": 34.1,
      "high": 101
    }
  },
  {
    "id": 114,
    "name": "Aman Rao Perala",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 4800,
      "strikeRate": 148.0,
      "average": 38.9,
      "high": 105
    }
  },
  {
    "id": 115,
    "name": "Akshat Raghuwanshi",
    "role": "Batsman",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 126,
      "runs": 3900,
      "strikeRate": 133.0,
      "average": 30.9,
      "high": 89
    }
  },
  {
    "id": 116,
    "name": "Manan Vohra",
    "role": "Batsman",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 4950,
      "strikeRate": 140.5,
      "average": 34.9,
      "high": 101
    }
  },
  {
    "id": 117,
    "name": "Yuvraj Chaudhary",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 118,
    "name": "Satvik Deswal",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 2760,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 119,
    "name": "Aman Khan",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 2760,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 120,
    "name": "Darshan Nalkande",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 121,
    "name": "Vicky Ostwal",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 122,
    "name": "Sairaj Patil",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 123,
    "name": "Suyash Prabhudessai",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 2280,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 124,
    "name": "Mayank Rawat",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 2360,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 125,
    "name": "Harsh Tyagi",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 134,
      "runs": 3320,
      "strikeRate": 151.8,
      "wickets": 74,
      "economy": 8.8
    }
  },
  {
    "id": 126,
    "name": "Mangesh Yadav",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 2280,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 127,
    "name": "Salil Arora",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "runs": 2980,
      "strikeRate": 128.6,
      "average": 27.4,
      "high": 81
    }
  },
  {
    "id": 128,
    "name": "Ricky Bhui",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "runs": 2980,
      "strikeRate": 139.4,
      "average": 31.6,
      "high": 87
    }
  },
  {
    "id": 129,
    "name": "Rahul Buddhi",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 3700,
      "strikeRate": 130.4,
      "average": 28.1,
      "high": 88
    }
  },
  {
    "id": 130,
    "name": "Saurav Chuahan",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 129,
      "runs": 4780,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 107
    }
  },
  {
    "id": 131,
    "name": "Yashvardhan Dalal",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 3940,
      "strikeRate": 143.0,
      "average": 33.0,
      "high": 97
    }
  },
  {
    "id": 132,
    "name": "Abhishek Pathak",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 4660,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 106
    }
  },
  {
    "id": 133,
    "name": "Kunal Rathore",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 3820,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 99
    }
  },
  {
    "id": 134,
    "name": "Ravi Singh",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 4660,
      "strikeRate": 135.8,
      "average": 30.2,
      "high": 99
    }
  },
  {
    "id": 135,
    "name": "K.M Asif",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.4,
    "stats": {
      "matches": 116,
      "wickets": 108,
      "economy": 7.39,
      "average": 22.5,
      "best": "4/17"
    }
  },
  {
    "id": 136,
    "name": "Sakib Hussain",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "wickets": 112,
      "economy": 7.99,
      "average": 25.0,
      "best": "3/22"
    }
  },
  {
    "id": 137,
    "name": "Mohammad Izhar",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 105,
      "wickets": 100,
      "economy": 7.75,
      "average": 24.0,
      "best": "5/20"
    }
  },
  {
    "id": 138,
    "name": "Vidwath Kaverappa",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "wickets": 120,
      "economy": 8.47,
      "average": 27.0,
      "best": "4/26"
    }
  },
  {
    "id": 139,
    "name": "Vijay Kumar",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 109,
      "wickets": 113,
      "economy": 8.83,
      "average": 28.5,
      "best": "3/29"
    }
  },
  {
    "id": 140,
    "name": "Vidyadhar Patil",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 101,
      "wickets": 104,
      "economy": 8.71,
      "average": 28.0,
      "best": "4/28"
    }
  },
  {
    "id": 141,
    "name": "PV.Satyanarayana Raju",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "wickets": 109,
      "economy": 7.15,
      "average": 21.5,
      "best": "4/15"
    }
  },
  {
    "id": 142,
    "name": "Onkar Tarmale",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 105,
      "wickets": 98,
      "economy": 7.51,
      "average": 23.0,
      "best": "5/18"
    }
  },
  {
    "id": 143,
    "name": "Prithviraj Yarra",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 108,
      "wickets": 109,
      "economy": 8.47,
      "average": 27.0,
      "best": "5/26"
    }
  },
  {
    "id": 144,
    "name": "Shubham Agrawal",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.4,
    "stats": {
      "matches": 119,
      "wickets": 109,
      "economy": 7.15,
      "average": 21.5,
      "best": "4/15"
    }
  },
  {
    "id": 145,
    "name": "Murugan Ashwin",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 103,
      "wickets": 95,
      "economy": 7.39,
      "average": 22.5,
      "best": "3/17"
    }
  },
  {
    "id": 146,
    "name": "Tejas Baroka",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "wickets": 119,
      "economy": 8.35,
      "average": 26.5,
      "best": "4/25"
    }
  },
  {
    "id": 147,
    "name": "K.C. Cariappa",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 105,
      "wickets": 104,
      "economy": 8.23,
      "average": 26.0,
      "best": "5/24"
    }
  },
  {
    "id": 148,
    "name": "Kartik Chadha",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "wickets": 120,
      "economy": 8.71,
      "average": 28.0,
      "best": "5/28"
    }
  },
  {
    "id": 149,
    "name": "Pravin Dubey",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 108,
      "wickets": 100,
      "economy": 7.39,
      "average": 22.5,
      "best": "5/17"
    }
  },
  {
    "id": 150,
    "name": "Mohit Rathee",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 100,
      "wickets": 90,
      "economy": 7.15,
      "average": 21.5,
      "best": "3/15"
    }
  },
  {
    "id": 151,
    "name": "Himanshu Sharma",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "wickets": 112,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 152,
    "name": "Bailapudi Yeswanth",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 107,
      "wickets": 107,
      "economy": 8.35,
      "average": 26.5,
      "best": "4/25"
    }
  },
  {
    "id": 153,
    "name": "Rehan Ahmed",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 81,
    "basePrice": 0.75,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 134.2,
      "wickets": 66,
      "economy": 7.6
    }
  },
  {
    "id": 154,
    "name": "Cooper Connolly",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 91,
    "basePrice": 2.0,
    "stats": {
      "matches": 122,
      "runs": 2360,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 155,
    "name": "Tom Curran",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 92,
    "basePrice": 2.0,
    "stats": {
      "matches": 129,
      "runs": 2920,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 156,
    "name": "Bevon-John Jacobs",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 157,
    "name": "Daniel Lawrence",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 126,
      "runs": 2680,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 158,
    "name": "George Linde",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 86,
    "basePrice": 1.0,
    "stats": {
      "matches": 126,
      "runs": 2680,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 159,
    "name": "Gulbadin Naib",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 1.0,
    "stats": {
      "matches": 120,
      "runs": 2200,
      "strikeRate": 158.4,
      "wickets": 77,
      "economy": 9.25
    }
  },
  {
    "id": 160,
    "name": "William Sutherland",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 1.0,
    "stats": {
      "matches": 118,
      "runs": 2040,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 161,
    "name": "Beau Webster",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 86,
    "basePrice": 1.25,
    "stats": {
      "matches": 129,
      "runs": 2920,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 162,
    "name": "Taskin Ahmed",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 100,
      "wickets": 102,
      "economy": 8.59,
      "average": 27.5,
      "best": "3/27"
    }
  },
  {
    "id": 163,
    "name": "Richard Gleeson",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 103,
      "wickets": 94,
      "economy": 7.27,
      "average": 22.0,
      "best": "3/16"
    }
  },
  {
    "id": 164,
    "name": "Alzarri Joseph",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 2.0,
    "stats": {
      "matches": 107,
      "wickets": 108,
      "economy": 8.47,
      "average": 27.0,
      "best": "4/26"
    }
  },
  {
    "id": 165,
    "name": "Shamar Joseph",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 109,
      "wickets": 99,
      "economy": 7.15,
      "average": 21.5,
      "best": "3/15"
    }
  },
  {
    "id": 166,
    "name": "Riley Meredith",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 87,
    "basePrice": 1.5,
    "stats": {
      "matches": 115,
      "wickets": 119,
      "economy": 8.83,
      "average": 28.5,
      "best": "3/29"
    }
  },
  {
    "id": 167,
    "name": "Jhye Richardson",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 88,
    "basePrice": 1.5,
    "stats": {
      "matches": 115,
      "wickets": 111,
      "economy": 7.87,
      "average": 24.5,
      "best": "3/21"
    }
  },
  {
    "id": 168,
    "name": "Navdeep Saini",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 117,
      "wickets": 109,
      "economy": 7.39,
      "average": 22.5,
      "best": "5/17"
    }
  },
  {
    "id": 169,
    "name": "Naveen Ul Haq",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 94,
    "basePrice": 2.0,
    "stats": {
      "matches": 108,
      "wickets": 106,
      "economy": 8.11,
      "average": 25.5,
      "best": "5/23"
    }
  },
  {
    "id": 170,
    "name": "Luke Wood",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 100,
      "wickets": 94,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 171,
    "name": "Kunal Chandela",
    "role": "Batsman",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 138,
      "runs": 5700,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 102
    }
  },
  {
    "id": 172,
    "name": "Ayush Doseja",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 139,
      "runs": 5850,
      "strikeRate": 145.0,
      "average": 37.3,
      "high": 110
    }
  },
  {
    "id": 173,
    "name": "Qamran Iqbal",
    "role": "Batsman",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 129,
      "runs": 4350,
      "strikeRate": 143.5,
      "average": 36.5,
      "high": 99
    }
  },
  {
    "id": 174,
    "name": "M.Dheeraj Kumar",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 3150,
      "strikeRate": 145.0,
      "average": 37.3,
      "high": 92
    }
  },
  {
    "id": 175,
    "name": "Bhanu Pania",
    "role": "Batsman",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 4500,
      "strikeRate": 130.0,
      "average": 29.3,
      "high": 91
    }
  },
  {
    "id": 176,
    "name": "Sahil Parakh",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 3000,
      "strikeRate": 136.0,
      "average": 32.5,
      "high": 85
    }
  },
  {
    "id": 177,
    "name": "Arsh Kabir Ranga",
    "role": "Batsman",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 4500,
      "strikeRate": 136.0,
      "average": 32.5,
      "high": 95
    }
  },
  {
    "id": 178,
    "name": "Adarsh Singh",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 3000,
      "strikeRate": 133.0,
      "average": 30.9,
      "high": 83
    }
  },
  {
    "id": 179,
    "name": "Manoj Bhandage",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 180,
    "name": "Mayank Dagar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 2280,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 181,
    "name": "Raghav Goyal",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 182,
    "name": "Manvanth Kumar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 183,
    "name": "Abid Mushtaq",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 184,
    "name": "Jalaj Saxena",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.4,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 147.4,
      "wickets": 72,
      "economy": 8.5
    }
  },
  {
    "id": 185,
    "name": "Atit Sheth",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 138.6,
      "wickets": 68,
      "economy": 7.9
    }
  },
  {
    "id": 186,
    "name": "Hritik Shokeen",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 187,
    "name": "Jagadeesha Suchith",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 188,
    "name": "Tanay Thyagarajann",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 151.8,
      "wickets": 74,
      "economy": 8.8
    }
  },
  {
    "id": 189,
    "name": "Joe Clarke",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 76,
    "basePrice": 0.5,
    "stats": {
      "matches": 111,
      "runs": 2620,
      "strikeRate": 139.4,
      "average": 31.6,
      "high": 84
    }
  },
  {
    "id": 190,
    "name": "Connor Esterhuizen",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "runs": 2980,
      "strikeRate": 128.6,
      "average": 27.4,
      "high": 81
    }
  },
  {
    "id": 191,
    "name": "Ajitesh Guruswamy",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "runs": 2980,
      "strikeRate": 132.2,
      "average": 28.8,
      "high": 83
    }
  },
  {
    "id": 192,
    "name": "Siddharth Joon",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 3940,
      "strikeRate": 143.0,
      "average": 33.0,
      "high": 97
    }
  },
  {
    "id": 193,
    "name": "Tom Moores",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 78,
    "basePrice": 0.4,
    "stats": {
      "matches": 124,
      "runs": 4180,
      "strikeRate": 144.8,
      "average": 33.7,
      "high": 100
    }
  },
  {
    "id": 194,
    "name": "Bipin Saurabh",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 124,
      "runs": 4180,
      "strikeRate": 143.0,
      "average": 33.0,
      "high": 99
    }
  },
  {
    "id": 195,
    "name": "Vishnu Solanki",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "runs": 3460,
      "strikeRate": 144.8,
      "average": 33.7,
      "high": 94
    }
  },
  {
    "id": 196,
    "name": "Hardik Tamore",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 129,
      "runs": 4780,
      "strikeRate": 125.0,
      "average": 26.0,
      "high": 94
    }
  },
  {
    "id": 197,
    "name": "Sayan Ghosh",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "wickets": 122,
      "economy": 8.71,
      "average": 28.0,
      "best": "4/28"
    }
  },
  {
    "id": 198,
    "name": "Money Grewal",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 108,
      "wickets": 108,
      "economy": 8.35,
      "average": 26.5,
      "best": "5/25"
    }
  },
  {
    "id": 199,
    "name": "Arpit Guleria",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 111,
      "wickets": 112,
      "economy": 8.47,
      "average": 27.0,
      "best": "5/26"
    }
  },
  {
    "id": 200,
    "name": "Sunil Kumar",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "wickets": 109,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 201,
    "name": "Tristan Luus",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 104,
      "wickets": 105,
      "economy": 8.47,
      "average": 27.0,
      "best": "4/26"
    }
  },
  {
    "id": 202,
    "name": "Divesh Sharma",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 113,
      "wickets": 113,
      "economy": 8.35,
      "average": 26.5,
      "best": "4/25"
    }
  },
  {
    "id": 203,
    "name": "Abhilash Shetty",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 105,
      "wickets": 104,
      "economy": 8.23,
      "average": 26.0,
      "best": "5/24"
    }
  },
  {
    "id": 204,
    "name": "Irfan Umair",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 109,
      "wickets": 102,
      "economy": 7.51,
      "average": 23.0,
      "best": "3/18"
    }
  },
  {
    "id": 205,
    "name": "Kuldip Yadav",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "wickets": 113,
      "economy": 8.23,
      "average": 26.0,
      "best": "5/24"
    }
  },
  {
    "id": 206,
    "name": "Manan Bhardwaj",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 100,
      "wickets": 104,
      "economy": 8.83,
      "average": 28.5,
      "best": "3/29"
    }
  },
  {
    "id": 207,
    "name": "Shreyas Chavan",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "wickets": 114,
      "economy": 7.87,
      "average": 24.5,
      "best": "3/21"
    }
  },
  {
    "id": 208,
    "name": "Parikshit Dhanak",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 101,
      "wickets": 98,
      "economy": 7.99,
      "average": 25.0,
      "best": "4/22"
    }
  },
  {
    "id": 209,
    "name": "Chintal Gandhi",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "wickets": 120,
      "economy": 8.83,
      "average": 28.5,
      "best": "4/29"
    }
  },
  {
    "id": 210,
    "name": "Dharmendrasinh Jadeja",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 104,
      "wickets": 94,
      "economy": 7.15,
      "average": 21.5,
      "best": "4/15"
    }
  },
  {
    "id": 211,
    "name": "Amit Kumar",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 103,
      "wickets": 96,
      "economy": 7.51,
      "average": 23.0,
      "best": "3/18"
    }
  },
  {
    "id": 212,
    "name": "Vishal Nishad",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "wickets": 116,
      "economy": 7.99,
      "average": 25.0,
      "best": "4/22"
    }
  },
  {
    "id": 213,
    "name": "Saumy Pandey",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "wickets": 121,
      "economy": 8.59,
      "average": 27.5,
      "best": "4/27"
    }
  },
  {
    "id": 214,
    "name": "Jhathavedh Subramanyan",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "wickets": 109,
      "economy": 7.27,
      "average": 22.0,
      "best": "3/16"
    }
  },
  {
    "id": 215,
    "name": "Muhammad Abbas",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 138.6,
      "wickets": 68,
      "economy": 7.9
    }
  },
  {
    "id": 216,
    "name": "Charith Asalanka",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 85,
    "basePrice": 1.0,
    "stats": {
      "matches": 133,
      "runs": 3240,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 217,
    "name": "Roston Chase",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 85,
    "basePrice": 1.25,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 218,
    "name": "Liam Dawson",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 93,
    "basePrice": 2.0,
    "stats": {
      "matches": 129,
      "runs": 2920,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 219,
    "name": "George Garton",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 129,
      "runs": 2920,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 220,
    "name": "Kyle Mayers",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 1.25,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 134.2,
      "wickets": 66,
      "economy": 7.6
    }
  },
  {
    "id": 221,
    "name": "Dwaine Pretorius",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 85,
    "basePrice": 1.0,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 140.8,
      "wickets": 69,
      "economy": 8.05
    }
  },
  {
    "id": 222,
    "name": "Nathan Smith",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 223,
    "name": "Dunith Wellalage",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 81,
    "basePrice": 0.75,
    "stats": {
      "matches": 133,
      "runs": 3240,
      "strikeRate": 134.2,
      "wickets": 66,
      "economy": 7.6
    }
  },
  {
    "id": 224,
    "name": "Jason Behrendorff",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 90,
    "basePrice": 1.5,
    "stats": {
      "matches": 119,
      "wickets": 120,
      "economy": 8.47,
      "average": 27.0,
      "best": "4/26"
    }
  },
  {
    "id": 225,
    "name": "Tanzim Hasan Sakib",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 100,
      "wickets": 101,
      "economy": 8.47,
      "average": 27.0,
      "best": "3/26"
    }
  },
  {
    "id": 226,
    "name": "Matthew Potts",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 105,
      "wickets": 102,
      "economy": 7.99,
      "average": 25.0,
      "best": "5/22"
    }
  },
  {
    "id": 227,
    "name": "Nahid Rana",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 110,
      "wickets": 101,
      "economy": 7.27,
      "average": 22.0,
      "best": "4/16"
    }
  },
  {
    "id": 228,
    "name": "Olly Stone",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 84,
    "basePrice": 1.25,
    "stats": {
      "matches": 101,
      "wickets": 104,
      "economy": 8.71,
      "average": 28.0,
      "best": "4/28"
    }
  },
  {
    "id": 229,
    "name": "Joshua Tongue",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 1.0,
    "stats": {
      "matches": 100,
      "wickets": 97,
      "economy": 7.99,
      "average": 25.0,
      "best": "3/22"
    }
  },
  {
    "id": 230,
    "name": "Sandeep Warrier",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 115,
      "wickets": 105,
      "economy": 7.15,
      "average": 21.5,
      "best": "3/15"
    }
  },
  {
    "id": 231,
    "name": "Sachin Dhas",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 4200,
      "strikeRate": 145.0,
      "average": 37.3,
      "high": 99
    }
  },
  {
    "id": 232,
    "name": "Miles Hammond",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 4950,
      "strikeRate": 134.5,
      "average": 31.7,
      "high": 97
    }
  },
  {
    "id": 233,
    "name": "Ahammed Imran",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 3150,
      "strikeRate": 133.0,
      "average": 30.9,
      "high": 84
    }
  },
  {
    "id": 234,
    "name": "Vishvarajsinh Jadeja",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 124,
      "runs": 3600,
      "strikeRate": 146.5,
      "average": 38.1,
      "high": 96
    }
  },
  {
    "id": 235,
    "name": "Ayaz Khan",
    "role": "Batsman",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 137,
      "runs": 5550,
      "strikeRate": 140.5,
      "average": 34.9,
      "high": 105
    }
  },
  {
    "id": 236,
    "name": "Daniel Lategan",
    "role": "Batsman",
    "country": "Overseas",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 129,
      "runs": 4350,
      "strikeRate": 143.5,
      "average": 36.5,
      "high": 99
    }
  },
  {
    "id": 237,
    "name": "Siddhant Rana",
    "role": "Batsman",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 4950,
      "strikeRate": 128.5,
      "average": 28.5,
      "high": 93
    }
  },
  {
    "id": 238,
    "name": "Aaron Varghese",
    "role": "Batsman",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 124,
      "runs": 3600,
      "strikeRate": 145.0,
      "average": 37.3,
      "high": 95
    }
  },
  {
    "id": 239,
    "name": "Atharva Ankolekar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 240,
    "name": "Abdul Bazith",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 158.4,
      "wickets": 77,
      "economy": 9.25
    }
  },
  {
    "id": 241,
    "name": "Karan Lal",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 242,
    "name": "Shams Mulani",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 2200,
      "strikeRate": 138.6,
      "wickets": 68,
      "economy": 7.9
    }
  },
  {
    "id": 243,
    "name": "Ripal Patel",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 244,
    "name": "Prince Rai",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 2280,
      "strikeRate": 147.4,
      "wickets": 72,
      "economy": 8.5
    }
  },
  {
    "id": 245,
    "name": "Vivrant Sharma",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 131,
      "runs": 3080,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 246,
    "name": "Utkarsh Singh",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 247,
    "name": "Ayush Vartak",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 151.8,
      "wickets": 74,
      "economy": 8.8
    }
  },
  {
    "id": 248,
    "name": "Sanjay Yadav",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 249,
    "name": "Sayed Irfan Aftab",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "wickets": 111,
      "economy": 7.75,
      "average": 24.0,
      "best": "4/20"
    }
  },
  {
    "id": 250,
    "name": "Esakkimuthu Ayyakutti",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "wickets": 110,
      "economy": 7.51,
      "average": 23.0,
      "best": "5/18"
    }
  },
  {
    "id": 251,
    "name": "Praful Hinge",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 100,
      "wickets": 95,
      "economy": 7.75,
      "average": 24.0,
      "best": "3/20"
    }
  },
  {
    "id": 252,
    "name": "Pankaj Jaswal",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "wickets": 119,
      "economy": 8.35,
      "average": 26.5,
      "best": "4/25"
    }
  },
  {
    "id": 253,
    "name": "Kulwant Khejroliya",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "wickets": 117,
      "economy": 8.47,
      "average": 27.0,
      "best": "4/26"
    }
  },
  {
    "id": 254,
    "name": "Ravi Kumar",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 107,
      "wickets": 107,
      "economy": 8.35,
      "average": 26.5,
      "best": "4/25"
    }
  },
  {
    "id": 255,
    "name": "Rajan Kumar",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 100,
      "wickets": 101,
      "economy": 8.47,
      "average": 27.0,
      "best": "3/26"
    }
  },
  {
    "id": 256,
    "name": "Safvan Patel",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 110,
      "wickets": 108,
      "economy": 8.11,
      "average": 25.5,
      "best": "4/23"
    }
  },
  {
    "id": 257,
    "name": "Ishan Porel",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 111,
      "wickets": 105,
      "economy": 7.63,
      "average": 23.5,
      "best": "5/19"
    }
  },
  {
    "id": 258,
    "name": "Purav Agarwal",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 100,
      "wickets": 94,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 259,
    "name": "Jikku Bright",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 110,
      "wickets": 105,
      "economy": 7.75,
      "average": 24.0,
      "best": "4/20"
    }
  },
  {
    "id": 260,
    "name": "Yash Dicholkar",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 100,
      "wickets": 104,
      "economy": 8.83,
      "average": 28.5,
      "best": "3/29"
    }
  },
  {
    "id": 261,
    "name": "Arab Gul",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 79,
    "basePrice": 0.4,
    "stats": {
      "matches": 116,
      "wickets": 112,
      "economy": 7.87,
      "average": 24.5,
      "best": "4/21"
    }
  },
  {
    "id": 262,
    "name": "Rakibul Hasan",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "wickets": 119,
      "economy": 8.47,
      "average": 27.0,
      "best": "3/26"
    }
  },
  {
    "id": 263,
    "name": "Traveen Mathew",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "wickets": 116,
      "economy": 8.59,
      "average": 27.5,
      "best": "5/27"
    }
  },
  {
    "id": 264,
    "name": "Naman Pushpak",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 104,
      "wickets": 98,
      "economy": 7.63,
      "average": 23.5,
      "best": "4/19"
    }
  },
  {
    "id": 265,
    "name": "Izaz Sawariya",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 112,
      "wickets": 109,
      "economy": 7.99,
      "average": 25.0,
      "best": "3/22"
    }
  },
  {
    "id": 266,
    "name": "Roshan Wagshare",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 109,
      "wickets": 107,
      "economy": 8.11,
      "average": 25.5,
      "best": "3/23"
    }
  },
  {
    "id": 267,
    "name": "Wesley Agar",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 0.75,
    "stats": {
      "matches": 106,
      "wickets": 101,
      "economy": 7.75,
      "average": 24.0,
      "best": "3/20"
    }
  },
  {
    "id": 268,
    "name": "Binura Fernando",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 113,
      "wickets": 116,
      "economy": 8.71,
      "average": 28.0,
      "best": "4/28"
    }
  },
  {
    "id": 269,
    "name": "Md Shoriful Islam",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 79,
    "basePrice": 0.75,
    "stats": {
      "matches": 114,
      "wickets": 118,
      "economy": 8.83,
      "average": 28.5,
      "best": "5/29"
    }
  },
  {
    "id": 270,
    "name": "Joshua Little Ireland 01/11/1999 26 BOWLER RHB LEFT ARM Fast Medium 42 74 11 Capped 75 Littl",
    "role": "Bowler",
    "country": "India",
    "rating": 80,
    "basePrice": 0.75,
    "stats": {
      "matches": 111,
      "wickets": 103,
      "economy": 7.39,
      "average": 22.5,
      "best": "5/17"
    }
  },
  {
    "id": 271,
    "name": "Obed McCoy",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 0.75,
    "stats": {
      "matches": 109,
      "wickets": 99,
      "economy": 7.15,
      "average": 21.5,
      "best": "3/15"
    }
  },
  {
    "id": 272,
    "name": "Billy Stanlake",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 0.75,
    "stats": {
      "matches": 112,
      "wickets": 105,
      "economy": 7.51,
      "average": 23.0,
      "best": "3/18"
    }
  },
  {
    "id": 273,
    "name": "R.S Ambrish",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 274,
    "name": "Nikhil Chaudhary",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 76,
    "basePrice": 0.4,
    "stats": {
      "matches": 120,
      "runs": 2200,
      "strikeRate": 158.4,
      "wickets": 77,
      "economy": 9.25
    }
  },
  {
    "id": 275,
    "name": "Krains Fuletra",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 2280,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 276,
    "name": "Macneil Noronha",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 277,
    "name": "R Rajkumar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 131,
      "runs": 3080,
      "strikeRate": 140.8,
      "wickets": 69,
      "economy": 8.05
    }
  },
  {
    "id": 278,
    "name": "Ninad Rathva",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 3160,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 279,
    "name": "Sunny Sandhu",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 3160,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 280,
    "name": "Shivalik Sharma",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 138.6,
      "wickets": 68,
      "economy": 7.9
    }
  },
  {
    "id": 281,
    "name": "Siddharth Yadav",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "runs": 2040,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 282,
    "name": "R.Sonu Yadav",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 283,
    "name": "Waseem Khanday",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "wickets": 116,
      "economy": 8.59,
      "average": 27.5,
      "best": "5/27"
    }
  },
  {
    "id": 284,
    "name": "Atif Mushtaq",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "wickets": 117,
      "economy": 8.59,
      "average": 27.5,
      "best": "3/27"
    }
  },
  {
    "id": 285,
    "name": "Atal Rai",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "wickets": 111,
      "economy": 7.63,
      "average": 23.5,
      "best": "5/19"
    }
  },
  {
    "id": 286,
    "name": "C.Rakshann Readdi",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "wickets": 115,
      "economy": 7.99,
      "average": 25.0,
      "best": "3/22"
    }
  },
  {
    "id": 287,
    "name": "Manish Reddy",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 104,
      "wickets": 103,
      "economy": 8.23,
      "average": 26.0,
      "best": "4/24"
    }
  },
  {
    "id": 288,
    "name": "Nishanth Saranu",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "wickets": 116,
      "economy": 8.59,
      "average": 27.5,
      "best": "5/27"
    }
  },
  {
    "id": 289,
    "name": "Deependra Singh",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 104,
      "wickets": 106,
      "economy": 8.59,
      "average": 27.5,
      "best": "4/27"
    }
  },
  {
    "id": 290,
    "name": "Rajat Verma",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 113,
      "wickets": 105,
      "economy": 7.39,
      "average": 22.5,
      "best": "4/17"
    }
  },
  {
    "id": 291,
    "name": "Rohit Yadav",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 102,
      "wickets": 103,
      "economy": 8.47,
      "average": 27.0,
      "best": "5/26"
    }
  },
  {
    "id": 292,
    "name": "Emanjot Chahal",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 3240,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 293,
    "name": "Shubhang Hegde",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 3240,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 294,
    "name": "Bal Krishna",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 295,
    "name": "Vihaan Malhotra",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 3000,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 296,
    "name": "Khilan Patel",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 2760,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 297,
    "name": "Delano Potgieter",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 298,
    "name": "Hardik Raj",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 299,
    "name": "Sarthak Ranjan",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 300,
    "name": "Parth Rekhade",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 116,
      "runs": 1880,
      "strikeRate": 140.8,
      "wickets": 69,
      "economy": 8.05
    }
  },
  {
    "id": 301,
    "name": "Tiaan Van Vuuren",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 3000,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 302,
    "name": "Shreevatsha Acharya",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 112,
      "wickets": 103,
      "economy": 7.27,
      "average": 22.0,
      "best": "3/16"
    }
  },
  {
    "id": 303,
    "name": "Sadek Hussain",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 108,
      "wickets": 104,
      "economy": 7.87,
      "average": 24.5,
      "best": "5/21"
    }
  },
  {
    "id": 304,
    "name": "Shubham Kapse",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "wickets": 108,
      "economy": 7.27,
      "average": 22.0,
      "best": "5/16"
    }
  },
  {
    "id": 305,
    "name": "Aaqib Khan",
    "role": "Bowler",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 112,
      "wickets": 113,
      "economy": 8.47,
      "average": 27.0,
      "best": "3/26"
    }
  },
  {
    "id": 306,
    "name": "Sabir Khan",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 112,
      "wickets": 106,
      "economy": 7.63,
      "average": 23.5,
      "best": "3/19"
    }
  },
  {
    "id": 307,
    "name": "Bayanda Majola",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 114,
      "wickets": 111,
      "economy": 7.99,
      "average": 25.0,
      "best": "5/22"
    }
  },
  {
    "id": 308,
    "name": "Srihari Nair",
    "role": "Bowler",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 103,
      "wickets": 95,
      "economy": 7.39,
      "average": 22.5,
      "best": "3/17"
    }
  },
  {
    "id": 309,
    "name": "Brijesh Sharma",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 109,
      "wickets": 101,
      "economy": 7.39,
      "average": 22.5,
      "best": "3/17"
    }
  },
  {
    "id": 310,
    "name": "Aman Shekhawat",
    "role": "Bowler",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 113,
      "wickets": 106,
      "economy": 7.51,
      "average": 23.0,
      "best": "4/18"
    }
  },
  {
    "id": 311,
    "name": "Himanshu Bisht",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 312,
    "name": "Shreyan Chakraborty",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 3000,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 313,
    "name": "Kanishk Chouhan",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 3000,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 314,
    "name": "Mayank Gusain",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 315,
    "name": "Akash Pugazhanthi",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 316,
    "name": "Abhimanyusingh Rajput",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 2360,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 317,
    "name": "Shubham Rana",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 2760,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 318,
    "name": "Arpit Rana",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 319,
    "name": "Maramreddy Reddy",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 3160,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 320,
    "name": "Sagar Solanki",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 3000,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 321,
    "name": "Aryaman Singh Dhaliwal",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 3160,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 322,
    "name": "Daksh Kamra",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 323,
    "name": "Vishal Mandwal",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 126,
      "runs": 2680,
      "strikeRate": 134.2,
      "wickets": 66,
      "economy": 7.6
    }
  },
  {
    "id": 324,
    "name": "Arfaz Mohammad",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 2760,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 325,
    "name": "Hemang Patel",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 326,
    "name": "Mridul Surroch",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 327,
    "name": "Anuj Thakral",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 126,
      "runs": 2680,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 328,
    "name": "Parth Vats",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 3240,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 329,
    "name": "Lalit Yadav",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 3160,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 330,
    "name": "Nitin Sai Yadav",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 2280,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 331,
    "name": "Krish Bhagat",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 332,
    "name": "Prerit Dutta",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 138.6,
      "wickets": 68,
      "economy": 7.9
    }
  },
  {
    "id": 333,
    "name": "Sammar Gajjar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 132,
      "runs": 3160,
      "strikeRate": 136.4,
      "wickets": 67,
      "economy": 7.75
    }
  },
  {
    "id": 334,
    "name": "Nasir Lone",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 335,
    "name": "Ishan Mulchandani",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 2360,
      "strikeRate": 143.0,
      "wickets": 70,
      "economy": 8.2
    }
  },
  {
    "id": 336,
    "name": "Akhil Scaria",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 337,
    "name": "Muhammed Sharafuddeen",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 115,
      "runs": 1800,
      "strikeRate": 134.2,
      "wickets": 66,
      "economy": 7.6
    }
  },
  {
    "id": 338,
    "name": "K.Ajay Singh",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 339,
    "name": "Ritik Tada",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 2200,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 340,
    "name": "Luckyrajsinh Vaghela",
    "role": "All-Rounder",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 127,
      "runs": 2760,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 341,
    "name": "Mohamed Ali",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 123,
      "runs": 2440,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 342,
    "name": "Madhav Bajaj",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 343,
    "name": "Akshu Bajwa",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 133,
      "runs": 3240,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 344,
    "name": "Varun Raj Singh Bisht",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 120,
      "runs": 2200,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 345,
    "name": "Rishabh Chauhan",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 131,
      "runs": 3080,
      "strikeRate": 158.4,
      "wickets": 77,
      "economy": 9.25
    }
  },
  {
    "id": 346,
    "name": "Jack Edwards",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 76,
    "basePrice": 0.5,
    "stats": {
      "matches": 126,
      "runs": 2680,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 347,
    "name": "Dian Forrester",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 119,
      "runs": 2120,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 348,
    "name": "Dhurmil Matkar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 131,
      "runs": 3080,
      "strikeRate": 147.4,
      "wickets": 72,
      "economy": 8.5
    }
  },
  {
    "id": 349,
    "name": "Shiva Singh",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 154.0,
      "wickets": 75,
      "economy": 8.95
    }
  },
  {
    "id": 350,
    "name": "Parikshit Valsangkar",
    "role": "All-Rounder",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 2840,
      "strikeRate": 156.2,
      "wickets": 76,
      "economy": 9.1
    }
  },
  {
    "id": 351,
    "name": "Mani Sankar Mura Singh",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 117,
      "runs": 1960,
      "strikeRate": 149.6,
      "wickets": 73,
      "economy": 8.65
    }
  },
  {
    "id": 352,
    "name": "Virandeep Singh",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 74,
    "basePrice": 0.3,
    "stats": {
      "matches": 30,
      "runs": 450,
      "strikeRate": 143.0,
      "wickets": 10,
      "economy": 8.2
    }
  },
  {
    "id": 353,
    "name": "Chama Milind",
    "role": "All-Rounder",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 131,
      "runs": 3080,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 354,
    "name": "K.L. Shrijith",
    "role": "Wicketkeeper",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 118,
      "runs": 3460,
      "strikeRate": 148.4,
      "average": 35.1,
      "high": 96
    }
  },
  {
    "id": 355,
    "name": "Eathan Bosch",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 82,
    "basePrice": 0.75,
    "stats": {
      "matches": 125,
      "runs": 2600,
      "strikeRate": 160.6,
      "wickets": 78,
      "economy": 9.4
    }
  },
  {
    "id": 356,
    "name": "Chris Green",
    "role": "All-Rounder",
    "country": "Overseas",
    "rating": 81,
    "basePrice": 0.75,
    "stats": {
      "matches": 124,
      "runs": 2520,
      "strikeRate": 162.8,
      "wickets": 79,
      "economy": 9.55
    }
  },
  {
    "id": 357,
    "name": "Swastik Chikara",
    "role": "Batsman",
    "country": "India",
    "rating": 79,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 4500,
      "strikeRate": 139.0,
      "average": 34.1,
      "high": 97
    }
  },
  {
    "id": 358,
    "name": "Rahul Raj Namala",
    "role": "Batsman",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 136,
      "runs": 5400,
      "strikeRate": 148.0,
      "average": 38.9,
      "high": 109
    }
  },
  {
    "id": 359,
    "name": "Virat Singh",
    "role": "Batsman",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 136,
      "runs": 5400,
      "strikeRate": 137.5,
      "average": 33.3,
      "high": 102
    }
  },
  {
    "id": 360,
    "name": "Abhimanyu Easwaran",
    "role": "Batsman",
    "country": "India",
    "rating": 77,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 3150,
      "strikeRate": 149.5,
      "average": 39.7,
      "high": 95
    }
  },
  {
    "id": 361,
    "name": "Tripuresh Singh",
    "role": "All-Rounder",
    "country": "India",
    "rating": 80,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 2280,
      "strikeRate": 132.0,
      "wickets": 65,
      "economy": 7.45
    }
  },
  {
    "id": 362,
    "name": "Kyle Verreynne",
    "role": "Wicketkeeper",
    "country": "Overseas",
    "rating": 84,
    "basePrice": 1.25,
    "stats": {
      "matches": 116,
      "runs": 3220,
      "strikeRate": 141.2,
      "average": 32.3,
      "high": 90
    }
  },
  {
    "id": 363,
    "name": "Blessing Muzarabani",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 83,
    "basePrice": 0.75,
    "stats": {
      "matches": 100,
      "wickets": 104,
      "economy": 8.83,
      "average": 28.5,
      "best": "3/29"
    }
  },
  {
    "id": 364,
    "name": "Ben Sears",
    "role": "Bowler",
    "country": "Overseas",
    "rating": 86,
    "basePrice": 1.5,
    "stats": {
      "matches": 113,
      "wickets": 106,
      "economy": 7.51,
      "average": 23.0,
      "best": "4/18"
    }
  },
  {
    "id": 365,
    "name": "Rajesh Mohanty",
    "role": "Bowler",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 110,
      "wickets": 105,
      "economy": 7.75,
      "average": 24.0,
      "best": "4/20"
    }
  },
  {
    "id": 366,
    "name": "Swastik Samal",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 121,
      "runs": 3150,
      "strikeRate": 148.0,
      "average": 38.9,
      "high": 94
    }
  },
  {
    "id": 367,
    "name": "Saransh Jain",
    "role": "All-Rounder",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 122,
      "runs": 2360,
      "strikeRate": 145.2,
      "wickets": 71,
      "economy": 8.35
    }
  },
  {
    "id": 368,
    "name": "Sooraj Sangaraju",
    "role": "Batsman",
    "country": "India",
    "rating": 76,
    "basePrice": 0.3,
    "stats": {
      "matches": 130,
      "runs": 4500,
      "strikeRate": 146.5,
      "average": 38.1,
      "high": 102
    }
  },
  {
    "id": 369,
    "name": "Tanmay Agarwal",
    "role": "Batsman",
    "country": "India",
    "rating": 78,
    "basePrice": 0.3,
    "stats": {
      "matches": 128,
      "runs": 4200,
      "strikeRate": 149.5,
      "average": 39.7,
      "high": 102
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = players;
}
