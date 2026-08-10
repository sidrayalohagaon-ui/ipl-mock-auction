const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const playersData = require('./players.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Server-side State
// Pre-populated Playing Squads from PDF (TATA IPL 2026 - Playing Squad)
const prePopulatedSquads = {
  CSK: [
    { name: "Anshul Kamboj", role: "Bowler", country: "India", rating: 83, price: 3.40 },
    { name: "Gurjapneet Singh", role: "Bowler", country: "India", rating: 78, price: 2.20 },
    { name: "Jamie Overton", role: "All-Rounder", country: "Overseas", rating: 80, price: 1.50 },
    { name: "MS Dhoni", role: "Wicketkeeper", country: "India", rating: 84, price: 4.00 },
    { name: "Mukesh Choudhary", role: "Bowler", country: "India", rating: 77, price: 0.30 },
    { name: "Nathan Ellis", role: "Bowler", country: "Overseas", rating: 81, price: 2.00 },
    { name: "Noor Ahmad", role: "Bowler", country: "Overseas", rating: 86, price: 10.00 },
    { name: "Ramakrishna Ghosh", role: "Bowler", country: "India", rating: 72, price: 0.30 },
    { name: "Sanju Samson", role: "Wicketkeeper", country: "India", rating: 89, price: 18.00 },
    { name: "Ruturaj Gaikwad", role: "Batsman", country: "India", rating: 89, price: 18.00 },
    { name: "Shivam Dube", role: "All-Rounder", country: "India", rating: 84, price: 12.00 },
    { name: "Shreyas Gopal", role: "Bowler", country: "India", rating: 78, price: 0.30 },
    { name: "Syed Khaleel Ahmed", role: "Bowler", country: "India", rating: 82, price: 4.80 },
    { name: "Ayush Mhatre", role: "Batsman", country: "India", rating: 75, price: 0.30 },
    { name: "Dewald Brevis", role: "Batsman", country: "Overseas", rating: 81, price: 2.20 },
    { name: "Urvil Patel", role: "Wicketkeeper", country: "India", rating: 74, price: 0.30 }
  ],
  DC: [
    { name: "Abishek Porel", role: "Wicketkeeper", country: "India", rating: 78, price: 4.00 },
    { name: "Ajay Mandal", role: "All-Rounder", country: "India", rating: 74, price: 0.30 },
    { name: "Ashutosh Sharma", role: "Batsman", country: "India", rating: 79, price: 3.80 },
    { name: "Axar Patel", role: "All-Rounder", country: "India", rating: 88, price: 16.50 },
    { name: "Dushmantha Chameera", role: "Bowler", country: "Overseas", rating: 78, price: 0.75 },
    { name: "Karun Nair", role: "Batsman", country: "India", rating: 78, price: 0.50 },
    { name: "KL Rahul", role: "Wicketkeeper", country: "India", rating: 88, price: 14.00 },
    { name: "Kuldeep Yadav", role: "Bowler", country: "India", rating: 89, price: 13.25 },
    { name: "Mitchell Starc", role: "Bowler", country: "Overseas", rating: 88, price: 11.75 },
    { name: "Mukesh Kumar", role: "Bowler", country: "India", rating: 81, price: 8.00 },
    { name: "Nitish Rana", role: "Batsman", country: "India", rating: 81, price: 4.20 },
    { name: "T. Natarajan", role: "Bowler", country: "India", rating: 83, price: 10.75 },
    { name: "Tripurana Vijay", role: "All-Rounder", country: "India", rating: 70, price: 0.30 },
    { name: "Tristan Stubbs", role: "Wicketkeeper", country: "Overseas", rating: 84, price: 10.00 },
    { name: "Vipraj Nigam", role: "Bowler", country: "India", rating: 70, price: 0.50 }
  ],
  GT: [
    { name: "Anuj Rawat", role: "Wicketkeeper", country: "India", rating: 77, price: 0.30 },
    { name: "Glenn Phillips", role: "Wicketkeeper", country: "Overseas", rating: 82, price: 2.00 },
    { name: "Gurnoor Singh Brar", role: "Bowler", country: "India", rating: 73, price: 1.30 },
    { name: "Ishant Sharma", role: "Bowler", country: "India", rating: 78, price: 0.75 },
    { name: "Jayant Yadav", role: "All-Rounder", country: "India", rating: 76, price: 0.75 },
    { name: "Jos Buttler", role: "Wicketkeeper", country: "Overseas", rating: 91, price: 15.75 },
    { name: "Kagiso Rabada", role: "Bowler", country: "Overseas", rating: 89, price: 10.75 },
    { name: "Kumar Kushagra", role: "Wicketkeeper", country: "India", rating: 75, price: 0.65 },
    { name: "Manav Suthar", role: "Bowler", country: "India", rating: 73, price: 0.30 },
    { name: "Mohammad Siraj", role: "Bowler", country: "India", rating: 85, price: 12.25 },
    { name: "Mohd. Arshad Khan", role: "Bowler", country: "India", rating: 75, price: 1.30 },
    { name: "Nishant Sindhu", role: "All-Rounder", country: "India", rating: 73, price: 0.30 },
    { name: "Prasidh Krishna", role: "Bowler", country: "India", rating: 80, price: 9.50 },
    { name: "R. Sai Kishore", role: "Bowler", country: "India", rating: 78, price: 2.00 },
    { name: "Rahul Tewatia", role: "All-Rounder", country: "India", rating: 79, price: 4.00 },
    { name: "Rashid Khan", role: "Bowler", country: "Overseas", rating: 91, price: 18.00 },
    { name: "Sai Sudharsan", role: "Batsman", country: "India", rating: 83, price: 8.50 },
    { name: "Shahrukh Khan", role: "All-Rounder", country: "India", rating: 78, price: 4.00 },
    { name: "Shubman Gill", role: "Batsman", country: "India", rating: 88, price: 16.50 },
    { name: "Washington Sundar", role: "All-Rounder", country: "India", rating: 83, price: 3.20 }
  ],
  KKR: [
    { name: "Ajinkya Rahane", role: "Batsman", country: "India", rating: 80, price: 1.50 },
    { name: "Angkrish Raghuvanshi", role: "Batsman", country: "India", rating: 76, price: 3.00 },
    { name: "Anukul Roy", role: "All-Rounder", country: "India", rating: 75, price: 0.40 },
    { name: "Harshit Rana", role: "Bowler", country: "India", rating: 81, price: 4.00 },
    { name: "Manish Pandey", role: "Batsman", country: "India", rating: 79, price: 0.75 },
    { name: "Ramandeep Singh", role: "All-Rounder", country: "India", rating: 78, price: 4.00 },
    { name: "Rinku Singh", role: "Batsman", country: "India", rating: 84, price: 13.00 },
    { name: "Rovman Powell", role: "Batsman", country: "Overseas", rating: 81, price: 1.50 },
    { name: "Sunil Narine", role: "All-Rounder", country: "Overseas", rating: 87, price: 12.00 },
    { name: "Umran Malik", role: "Bowler", country: "India", rating: 77, price: 0.75 },
    { name: "Vaibhav Arora", role: "Bowler", country: "India", rating: 77, price: 1.80 },
    { name: "Varun Chakaravarthy", role: "Bowler", country: "India", rating: 85, price: 12.00 }
  ],
  LSG: [
    { name: "Abdul Samad", role: "Batsman", country: "India", rating: 80, price: 4.20 },
    { name: "Aiden Markram", role: "Batsman", country: "Overseas", rating: 84, price: 2.00 },
    { name: "Akash Singh", role: "Bowler", country: "India", rating: 74, price: 0.30 },
    { name: "Arjun Tendulkar", role: "All-Rounder", country: "India", rating: 73, price: 0.30 },
    { name: "Arshin Kulkarni", role: "All-Rounder", country: "India", rating: 72, price: 0.30 },
    { name: "Avesh Khan", role: "Bowler", country: "India", rating: 82, price: 9.75 },
    { name: "Ayush Badoni", role: "Batsman", country: "India", rating: 79, price: 4.00 },
    { name: "Digvesh Rathi", role: "Bowler", country: "India", rating: 70, price: 0.30 },
    { name: "Himmat Singh", role: "Batsman", country: "India", rating: 72, price: 0.30 },
    { name: "Manimaran Siddharth", role: "Bowler", country: "India", rating: 74, price: 0.75 },
    { name: "Mohsin Khan", role: "Bowler", country: "India", rating: 78, price: 4.00 },
    { name: "Matthew Breetzke", role: "Batsman", country: "Overseas", rating: 76, price: 0.75 },
    { name: "Mayank Yadav", role: "Bowler", country: "India", rating: 83, price: 11.00 },
    { name: "Mohammed Shami", role: "Bowler", country: "India", rating: 90, price: 10.00 },
    { name: "Mitchell Marsh", role: "All-Rounder", country: "Overseas", rating: 85, price: 3.40 },
    { name: "Nicholas Pooran", role: "Wicketkeeper", country: "Overseas", rating: 90, price: 21.00 },
    { name: "Prince Yadav", role: "All-Rounder", country: "India", rating: 70, price: 0.30 },
    { name: "Rishabh Pant", role: "Wicketkeeper", country: "India", rating: 91, price: 27.00 },
    { name: "Shahbaz Ahmed", role: "All-Rounder", country: "India", rating: 79, price: 2.40 }
  ],
  MI: [
    { name: "Allah Ghazanfar", role: "Bowler", country: "Overseas", rating: 80, price: 4.80 },
    { name: "Ashwani Kumar", role: "Bowler", country: "India", rating: 71, price: 0.30 },
    { name: "Corbin Bosch", role: "All-Rounder", country: "Overseas", rating: 75, price: 0.75 },
    { name: "Deepak Chahar", role: "Bowler", country: "India", rating: 81, price: 9.25 },
    { name: "Hardik Pandya", role: "All-Rounder", country: "India", rating: 88, price: 16.35 },
    { name: "Jasprit Bumrah", role: "Bowler", country: "India", rating: 94, price: 18.00 },
    { name: "Mayank Markande", role: "Bowler", country: "India", rating: 78, price: 0.30 },
    { name: "Mitchell Santner", role: "All-Rounder", country: "Overseas", rating: 82, price: 2.00 },
    { name: "Naman Dhir", role: "All-Rounder", country: "India", rating: 77, price: 5.25 },
    { name: "Raghu Sharma", role: "Bowler", country: "India", rating: 70, price: 0.30 },
    { name: "Raj Angad Bawa", role: "All-Rounder", country: "India", rating: 73, price: 0.30 },
    { name: "Robin Minz", role: "Wicketkeeper", country: "India", rating: 73, price: 0.65 },
    { name: "Rohit Sharma", role: "Batsman", country: "India", rating: 89, price: 16.30 },
    { name: "Ryan Rickelton", role: "Wicketkeeper", country: "Overseas", rating: 79, price: 1.00 },
    { name: "Shardul Thakur", role: "Bowler", country: "India", rating: 81, price: 2.00 },
    { name: "Sherfane Rutherford", role: "Batsman", country: "Overseas", rating: 79, price: 2.60 },
    { name: "Suryakumar Yadav", role: "Batsman", country: "India", rating: 91, price: 16.35 },
    { name: "Tilak Varma", role: "Batsman", country: "India", rating: 83, price: 8.00 },
    { name: "Trent Boult", role: "Bowler", country: "Overseas", rating: 87, price: 12.50 },
    { name: "Will Jacks", role: "Batsman", country: "Overseas", rating: 84, price: 5.25 }
  ],
  PBKS: [
    { name: "Arshdeep Singh", role: "Bowler", country: "India", rating: 88, price: 18.00 },
    { name: "Azmatullah Omarzai", role: "All-Rounder", country: "Overseas", rating: 81, price: 2.40 },
    { name: "Harnoor Pannu", role: "Batsman", country: "India", rating: 72, price: 0.30 },
    { name: "Harpreet Brar", role: "Bowler", country: "India", rating: 79, price: 1.50 },
    { name: "Lockie Ferguson", role: "Bowler", country: "Overseas", rating: 82, price: 2.00 },
    { name: "Marco Jansen", role: "Bowler", country: "Overseas", rating: 82, price: 7.00 },
    { name: "Marcus Stoinis", role: "All-Rounder", country: "Overseas", rating: 85, price: 11.00 },
    { name: "Mitch Owen", role: "All-Rounder", country: "India", rating: 72, price: 3.00 },
    { name: "Musheer Khan", role: "All-Rounder", country: "India", rating: 75, price: 0.30 },
    { name: "Nehal Wadhera", role: "Batsman", country: "India", rating: 78, price: 4.20 },
    { name: "Prabhsimran Singh", role: "Wicketkeeper", country: "India", rating: 77, price: 4.00 },
    { name: "Priyansh Arya", role: "Batsman", country: "India", rating: 75, price: 3.80 },
    { name: "Pyla Avinash", role: "Batsman", country: "India", rating: 70, price: 0.30 },
    { name: "Shashank Singh", role: "Batsman", country: "India", rating: 80, price: 5.50 },
    { name: "Shreyas Iyer", role: "Batsman", country: "India", rating: 87, price: 26.75 },
    { name: "Suryansh Shedge", role: "Batsman", country: "India", rating: 72, price: 0.30 },
    { name: "Vishnu Vinod", role: "Wicketkeeper", country: "India", rating: 75, price: 0.95 },
    { name: "Vyshak Vijaykumar", role: "Bowler", country: "India", rating: 77, price: 1.80 },
    { name: "Xavier Bartlett", role: "Bowler", country: "Overseas", rating: 77, price: 0.80 },
    { name: "Yash Thakur", role: "Bowler", country: "India", rating: 76, price: 1.60 },
    { name: "Yuzvendra Chahal", role: "Bowler", country: "India", rating: 86, price: 18.00 }
  ],
  RR: [
    { name: "Dhruv Jurel", role: "Wicketkeeper", country: "India", rating: 79, price: 14.00 },
    { name: "Donovan Ferreira", role: "All-Rounder", country: "Overseas", rating: 77, price: 1.00 },
    { name: "Jofra Archer", role: "Bowler", country: "Overseas", rating: 86, price: 12.50 },
    { name: "Kwena Maphaka", role: "Bowler", country: "Overseas", rating: 75, price: 1.50 },
    { name: "Lhuan-dre Pretorius", role: "Wicketkeeper", country: "Overseas", rating: 73, price: 0.30 },
    { name: "Nandre Burger", role: "Bowler", country: "Overseas", rating: 79, price: 3.50 },
    { name: "Ravindra Jadeja", role: "All-Rounder", country: "India", rating: 89, price: 14.00 },
    { name: "Riyan Parag", role: "Batsman", country: "India", rating: 82, price: 14.00 },
    { name: "Sam Curran", role: "All-Rounder", country: "Overseas", rating: 85, price: 2.40 },
    { name: "Sandeep Sharma", role: "Bowler", country: "India", rating: 79, price: 4.00 },
    { name: "Shimron Hetmyer", role: "Batsman", country: "Overseas", rating: 81, price: 11.00 },
    { name: "Shubham Dubey", role: "Batsman", country: "India", rating: 74, price: 0.80 },
    { name: "Tushar Deshpande", role: "Bowler", country: "India", rating: 78, price: 6.50 },
    { name: "Vaibhav Suryavanshi", role: "Batsman", country: "India", rating: 72, price: 1.10 },
    { name: "Yashasvi Jaiswal", role: "Batsman", country: "India", rating: 87, price: 18.00 },
    { name: "Yudhvir Charak", role: "Bowler", country: "India", rating: 73, price: 0.35 }
  ],
  RCB: [
    { name: "Abhinandan Singh", role: "Bowler", country: "India", rating: 70, price: 0.30 },
    { name: "Bhuvneshwar Kumar", role: "Bowler", country: "India", rating: 80, price: 10.75 },
    { name: "Devdutt Padikkal", role: "Batsman", country: "India", rating: 78, price: 2.00 },
    { name: "Jacob Bethell", role: "All-Rounder", country: "Overseas", rating: 77, price: 2.60 },
    { name: "Jitesh Sharma", role: "Wicketkeeper", country: "India", rating: 81, price: 11.00 },
    { name: "Josh Hazlewood", role: "Bowler", country: "Overseas", rating: 86, price: 12.50 },
    { name: "Krunal Pandya", role: "All-Rounder", country: "India", rating: 81, price: 5.75 },
    { name: "Nuwan Thushara", role: "Bowler", country: "Overseas", rating: 79, price: 1.60 },
    { name: "Phil Salt", role: "Wicketkeeper", country: "Overseas", rating: 85, price: 11.50 },
    { name: "Rajat Patidar", role: "Batsman", country: "India", rating: 80, price: 11.00 },
    { name: "Rasikh Dar", role: "Bowler", country: "India", rating: 77, price: 6.00 },
    { name: "Romario Shepherd", role: "All-Rounder", country: "Overseas", rating: 78, price: 1.50 },
    { name: "Suyash Sharma", role: "Bowler", country: "India", rating: 76, price: 2.60 },
    { name: "Swapnil Singh", role: "All-Rounder", country: "India", rating: 74, price: 0.50 },
    { name: "Tim David", role: "Batsman", country: "Overseas", rating: 82, price: 3.00 },
    { name: "Virat Kohli", role: "Batsman", country: "India", rating: 92, price: 21.00 },
    { name: "Yash Dayal", role: "Bowler", country: "India", rating: 77, price: 5.00 }
  ],
  SRH: [
    { name: "Abhishek Sharma", role: "Batsman", country: "India", rating: 84, price: 14.00 },
    { name: "Aniket Verma", role: "Batsman", country: "India", rating: 71, price: 0.30 },
    { name: "Brydon Carse", role: "Bowler", country: "Overseas", rating: 77, price: 1.00 },
    { name: "Eshan Malinga", role: "Bowler", country: "Overseas", rating: 74, price: 1.20 },
    { name: "Harsh Dubey", role: "Bowler", country: "India", rating: 72, price: 0.30 },
    { name: "Harshal Patel", role: "Bowler", country: "India", rating: 82, price: 8.00 },
    { name: "Heinrich Klaasen", role: "Wicketkeeper", country: "Overseas", rating: 90, price: 23.00 },
    { name: "Ishan Kishan", role: "Wicketkeeper", country: "India", rating: 84, price: 11.25 },
    { name: "Jaydev Unadkat", role: "Bowler", country: "India", rating: 77, price: 1.00 },
    { name: "Kamindu Mendis", role: "All-Rounder", country: "Overseas", rating: 80, price: 0.75 },
    { name: "Nitish Kumar Reddy", role: "All-Rounder", country: "India", rating: 79, price: 6.00 },
    { name: "Pat Cummins", role: "Bowler", country: "Overseas", rating: 89, price: 18.00 },
    { name: "Smaran Ravichandaran", role: "Batsman", country: "India", rating: 70, price: 0.30 },
    { name: "Travis Head", role: "Batsman", country: "Overseas", rating: 88, price: 14.00 },
    { name: "Zeeshan Ansari", role: "Bowler", country: "India", rating: 74, price: 0.40 }
  ]
};

// Server-side State (Starting leftover budgets for IPL 2026 Mini Auction from PDF)
const franchisesData = [
  { id: "CSK", name: "Chennai Super Kings", shortName: "CSK", owner: "India Cements", color: "#f8d107", secondaryColor: "#005ea6", budget: 43.40, squad: [], rtmCards: 3, preferences: { Batsman: 1.1, Bowler: 1.0, Wicketkeeper: 1.2, "All-Rounder": 1.3, maxRatingWeight: 0.95 } },
  { id: "MI", name: "Mumbai Indians", shortName: "MI", owner: "Reliance Industries", color: "#004ba0", secondaryColor: "#d1ab3a", budget: 2.75, squad: [], rtmCards: 3, preferences: { Batsman: 1.2, Bowler: 1.3, Wicketkeeper: 1.0, "All-Rounder": 1.1, maxRatingWeight: 0.98 } },
  { id: "RCB", name: "Royal Challengers Bengaluru", shortName: "RCB", owner: "Diageo", color: "#ec1c24", secondaryColor: "#000000", budget: 16.40, squad: [], rtmCards: 3, preferences: { Batsman: 1.4, Bowler: 1.1, Wicketkeeper: 1.1, "All-Rounder": 1.0, maxRatingWeight: 0.96 } },
  { id: "KKR", name: "Kolkata Knight Riders", shortName: "KKR", owner: "Red Chillies Entertainment", color: "#3a225d", secondaryColor: "#f1c40f", budget: 64.30, squad: [], rtmCards: 3, preferences: { Batsman: 1.0, Bowler: 1.1, Wicketkeeper: 1.0, "All-Rounder": 1.4, maxRatingWeight: 0.93 } },
  { id: "RR", name: "Rajasthan Royals", shortName: "RR", owner: "Emerging Media", color: "#ea1a85", secondaryColor: "#254aa5", budget: 16.05, squad: [], rtmCards: 3, preferences: { Batsman: 1.2, Bowler: 1.2, Wicketkeeper: 1.1, "All-Rounder": 1.0, maxRatingWeight: 0.94 } },
  { id: "DC", name: "Delhi Capitals", shortName: "DC", owner: "GMR & JSW", color: "#1b3e85", secondaryColor: "#ef4123", budget: 21.80, squad: [], rtmCards: 3, preferences: { Batsman: 1.1, Bowler: 1.2, Wicketkeeper: 1.3, "All-Rounder": 1.0, maxRatingWeight: 0.91 } },
  { id: "SRH", name: "Sunrisers Hyderabad", shortName: "SRH", owner: "SUN Group", color: "#f26522", secondaryColor: "#000000", budget: 25.50, squad: [], rtmCards: 3, preferences: { Batsman: 1.3, Bowler: 1.2, Wicketkeeper: 1.0, "All-Rounder": 1.1, maxRatingWeight: 0.92 } },
  { id: "PBKS", name: "Punjab Kings", shortName: "PBKS", owner: "KPH Dream Cricket", color: "#ed1f24", secondaryColor: "#ffffff", budget: 11.50, squad: [], rtmCards: 3, preferences: { Batsman: 1.1, Bowler: 1.2, Wicketkeeper: 1.1, "All-Rounder": 1.2, maxRatingWeight: 0.89 } },
  { id: "LSG", name: "Lucknow Super Giants", shortName: "LSG", owner: "RPSG Group", color: "#1f4a7c", secondaryColor: "#e6ad1c", budget: 22.95, squad: [], rtmCards: 3, preferences: { Batsman: 1.1, Bowler: 1.1, Wicketkeeper: 1.2, "All-Rounder": 1.3, maxRatingWeight: 0.90 } },
  { id: "GT", name: "Gujarat Titans", shortName: "GT", owner: "CVC Capital", color: "#1b253b", secondaryColor: "#cca355", budget: 12.90, squad: [], rtmCards: 3, preferences: { Batsman: 1.2, Bowler: 1.3, Wicketkeeper: 1.0, "All-Rounder": 1.1, maxRatingWeight: 0.91 } }
];

let franchises = JSON.parse(JSON.stringify(franchisesData));
let humanTeams = [];
let clientTeamMap = {};
let humanPassedState = {};
let currentView = "welcome";
let currentPlayerIndex = -1;
let currentBid = 0.0;
let currentBidder = null;
let countdownStep = 0;
let timerDuration = 10;
let timeLeft = 10;
let cpuBidProbability = 0.40;
let auctionActive = false;
let isPaused = false;
let currentAuctionPlayers = [];
let logs = [];
let serverTimer = null;
let poolMode = "mini"; // Default is 'mini' for Mini Auction 2026
let preBiddingDelay = 0;
let clientNameMap = {}; // Maps clientId -> userName

let isRtmActive = false;
let rtmPlayer = null;
let rtmHighestBidder = null;
let rtmBidAmount = 0;
let rtmFormerTeamId = null;
let rtmTimeout = null;

const formerTeamsMap = {
  "Devon Conway": "CSK",
  "Jake Fraser-McGurk": "DC",
  "Rachin Ravindra": "CSK",
  "Cameron Green": "RCB",
  "Sunil Narine": "KKR",
  "Heinrich Klaasen": "SRH",
  "Pat Cummins": "SRH",
  "Travis Head": "SRH",
  "Jasprit Bumrah": "MI",
  "Rohit Sharma": "MI",
  "Hardik Pandya": "MI",
  "Nicholas Pooran": "LSG",
  "Rashid Khan": "GT",
  "Kagiso Rabada": "PBKS",
  "Sam Curran": "PBKS",
  "Shreyas Iyer": "KKR",
  "Rishabh Pant": "DC",
  "Trent Boult": "RR",
  "Jos Buttler": "RR",
  "Yuzvendra Chahal": "RR",
  "Mitchell Starc": "KKR",
  "Mitchell Marsh": "DC",
  "Marcus Stoinis": "LSG",
  "Quinton de Kock": "LSG",
  "Josh Hazlewood": "RCB",
  "Faf du Plessis": "RCB",
  "Glenn Maxwell": "RCB"
};

function getFormerTeam(playerName, playerId) {
  if (formerTeamsMap[playerName]) {
    return formerTeamsMap[playerName];
  }
  for (const teamId in prePopulatedSquads) {
    if (prePopulatedSquads[teamId].some(p => p.name === playerName)) {
      return teamId;
    }
  }
  const teams = ["CSK", "MI", "RCB", "KKR", "RR", "DC", "SRH", "PBKS", "LSG", "GT"];
  return teams[playerId % teams.length];
}

function checkAndTriggerRTM(player, bidderId, price) {
  const formerTeamId = getFormerTeam(player.name, player.id);
  const formerTeam = franchises.find(f => f.id === formerTeamId);
  
  if (formerTeamId && formerTeam && formerTeamId !== bidderId && formerTeam.rtmCards > 0 && formerTeam.budget >= price && formerTeam.squad.length < 25) {
    isRtmActive = true;
    rtmPlayer = player;
    rtmHighestBidder = bidderId;
    rtmBidAmount = price;
    rtmFormerTeamId = formerTeamId;
    
    const isHuman = humanTeams.includes(formerTeamId);
    if (isHuman) {
      addLog("system", `🚨 RTM AVAILABLE! Former team ${formerTeam.name} has 15s to match final bid of ${price.toFixed(2)} Cr!`, formerTeam.color);
      io.emit('rtm-prompt', { 
        playerName: player.name, 
        formerTeamId, 
        bidAmount: price, 
        highestBidder: bidderId 
      });
      
      if (rtmTimeout) clearTimeout(rtmTimeout);
      rtmTimeout = setTimeout(() => {
        if (isRtmActive) {
          addLog("system", `Time expired! ${formerTeam.name} did not invoke RTM.`);
          resolveRTM(false);
        }
      }, 15000);
    } else {
      // CPU decision (e.g. if rating >= 84 and budget is secure)
      const cpuChoice = player.rating >= 84 && formerTeam.budget >= price;
      setTimeout(() => {
        resolveRTM(cpuChoice);
      }, 2000);
    }
    return true;
  }
  return false;
}

function resolveRTM(claim) {
  if (!isRtmActive) return;
  isRtmActive = false;
  if (rtmTimeout) clearTimeout(rtmTimeout);
  
  const formerTeam = franchises.find(f => f.id === rtmFormerTeamId);
  
  if (claim && formerTeam && formerTeam.budget >= rtmBidAmount) {
    formerTeam.rtmCards--;
    sellPlayer(rtmPlayer, rtmFormerTeamId, rtmBidAmount);
    addLog("sold", `🔨 RTM MATCHED! ${formerTeam.name} exercised RTM card to buy back ${rtmPlayer.name} for ${rtmBidAmount.toFixed(2)} Cr!`, formerTeam.color);
  } else {
    sellPlayer(rtmPlayer, rtmHighestBidder, rtmBidAmount);
  }
  
  rtmPlayer = null;
  rtmHighestBidder = null;
  rtmBidAmount = 0;
  rtmFormerTeamId = null;
}

// Build a list of all retained player names
const retainedPlayerNames = new Set();
for (const teamId in prePopulatedSquads) {
  prePopulatedSquads[teamId].forEach(player => {
    retainedPlayerNames.add(player.name.toLowerCase().trim());
  });
}

// Pre-populate squads with their retained players
function populateRetainedSquads() {
  franchises.forEach(team => {
    team.squad = []; // Reset first
    const retained = prePopulatedSquads[team.id] || [];
    retained.forEach(p => {
      team.squad.push({
        id: "retained_" + p.name.toLowerCase().replace(/\s+/g, "_"),
        name: p.name,
        role: p.role,
        country: p.country,
        rating: p.rating,
        status: "Sold",
        soldTo: team.id,
        soldPrice: p.price
      });
    });
  });
}
populateRetainedSquads();

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Filter players dynamically based on selected pool mode and randomize the order
function getFilteredPlayers() {
  let list = playersData.filter(p => !retainedPlayerNames.has(p.name.toLowerCase().trim()));
  if (poolMode === "mini") {
    // Mini Auction: Rating >= 80 or basePrice >= 1.5 Cr (Top 145 cap release pool)
    list = list.filter(p => p.rating >= 80 || p.basePrice >= 1.5);
  }
  const mapped = list.map(p => ({
    ...p,
    status: "Upcoming",
    soldTo: null,
    soldPrice: null
  }));
  return shuffleArray(mapped);
}

// Initialize players
currentAuctionPlayers = getFilteredPlayers();

// System Log helper
function addLog(type, text, color = null) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const logItem = { type, text, color, time };
  logs.push(logItem);
  io.emit('log-added', logItem);
}

const os = require('os');
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Full State Summary for joining clients
function getFullState() {
  return {
    franchises,
    humanTeams,
    clientTeamMap,
    humanPassedState,
    currentView,
    currentPlayerIndex,
    currentBid,
    currentBidder,
    timeLeft,
    timerDuration,
    auctionActive,
    isPaused,
    currentAuctionPlayers,
    logs,
    poolMode,
    poolSize: currentAuctionPlayers.length,
    localIp: getLocalIPAddress(),
    clientNameMap
  };
}

// Bidding Helpers
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

function calculateCPUValuation(team, player) {
  const baseFactor = team.preferences[player.role] || 1.0;
  const ratingVal = Math.max(0, (player.rating - 70) * 0.45);
  let roleNeedFactor = 1.0;
  const roleCount = team.squad.filter(p => p.role === player.role).length;
  if (roleCount === 0) roleNeedFactor = 1.25;
  else if (roleCount >= 6) roleNeedFactor = 0.7;

  const maxPotentialBid = (player.basePrice + ratingVal) * baseFactor * roleNeedFactor;
  const seed = (player.id * 17 + team.id.charCodeAt(0)) % 10;
  const variance = 0.85 + (seed / 40);

  return maxPotentialBid * variance;
}

function canCPUBid(team, bidAmount, player) {
  if (!canTeamBid(team, bidAmount, player)) return false;
  const valuation = calculateCPUValuation(team, player);
  if (bidAmount > valuation) return false;
  return true;
}

function executeBid(bidderId, amount) {
  if (isRtmActive) return; // Block bids during RTM prompt
  preBiddingDelay = 0; // Clear intro delay immediately upon bid activity
  currentBid = amount;
  currentBidder = bidderId;
  timeLeft = timerDuration;

  const team = franchises.find(f => f.id === bidderId);
  const claimerId = Object.keys(clientTeamMap).find(cid => clientTeamMap[cid] === bidderId);
  const bidderName = claimerId ? (clientNameMap[claimerId] || "Friend") : null;
  const logText = bidderName 
    ? `${team.shortName} (${bidderName}) bids ${amount.toFixed(2)} Cr`
    : `${team.shortName} bids ${amount.toFixed(2)} Cr`;

  addLog("bid", logText, team.color);

  io.emit('bid-updated', { currentBid, currentBidder, timeLeft });
}

// Resolve Player - SOLD
function sellPlayer(player, bidderId, price) {
  auctionActive = false;
  if (serverTimer) clearInterval(serverTimer);

  player.status = "Sold";
  player.soldTo = bidderId;
  player.soldPrice = price;

  const team = franchises.find(f => f.id === bidderId);
  team.budget -= price;
  team.squad.push(player);

  addLog("sold", `SOLD! ${player.name} bought by ${team.name} for ${price.toFixed(2)} Cr!`, team.color);
  io.emit('auction-resolved', { player, franchises, currentAuctionPlayers });

  setTimeout(() => {
    startNewPlayerAuction();
  }, 8000);
}

// Resolve Player - UNSOLD
function markPlayerUnsold(player) {
  auctionActive = false;
  if (serverTimer) clearInterval(serverTimer);

  player.status = "Unsold";

  addLog("unsold", `${player.name} went UNSOLD.`);
  io.emit('auction-resolved', { player, franchises, currentAuctionPlayers });

  setTimeout(() => {
    startNewPlayerAuction();
  }, 8000);
}

// Next player trigger
function startNewPlayerAuction() {
  if (serverTimer) clearInterval(serverTimer);

  const nextPlayerIndex = currentAuctionPlayers.findIndex(p => p.status === "Upcoming");
  if (nextPlayerIndex === -1) {
    addLog("system", "Auction completed! All players have been presented.");
    auctionActive = false;
    currentPlayerIndex = -1;
    io.emit('auction-completed', getFullState());
    return;
  }

  currentPlayerIndex = nextPlayerIndex;
  const player = currentAuctionPlayers[currentPlayerIndex];
  player.status = "Bidding";

  currentBid = player.basePrice;
  currentBidder = null;

  humanPassedState = {};
  humanTeams.forEach(tid => {
    humanPassedState[tid] = false;
  });

  timeLeft = timerDuration;
  preBiddingDelay = 6; // Wait 6 seconds for client player name speech intro
  auctionActive = true;
  isPaused = false;

  addLog("system", `Player introduced: ${player.name} (${player.role}) - Base Price: ${player.basePrice.toFixed(2)} Cr`);
  io.emit('new-player-started', getFullState());

  serverTimer = setInterval(serverTimerTick, 1000);
}

// Server Core Timer Loop
function serverTimerTick() {
  if (isPaused || !auctionActive || isRtmActive) return;

  const player = currentAuctionPlayers[currentPlayerIndex];

  if (preBiddingDelay > 0) {
    preBiddingDelay--;
    // Keep timer frozen at full duration in client UI
    io.emit('timer-ticked', { timeLeft: timerDuration });
    return;
  }

  timeLeft--;
  io.emit('timer-ticked', { timeLeft });

  // CPU check bid
  if (timeLeft > 1) {
    if (Math.random() < cpuBidProbability) {
      const nextIncrement = calculateIncrement(currentBid);
      const potentialNewBid = currentBidder ? currentBid + nextIncrement : player.basePrice;

      let interestedCPUs = [];
      franchises.forEach(team => {
        if (!humanTeams.includes(team.id) && canCPUBid(team, potentialNewBid, player)) {
          interestedCPUs.push(team);
        }
      });

      if (interestedCPUs.length > 0) {
        const randomTeam = interestedCPUs[Math.floor(Math.random() * interestedCPUs.length)];
        executeBid(randomTeam.id, potentialNewBid);
        return;
      }
    }
  }

  // Handle countdowns
  if (timeLeft === 7) {
    if (currentBidder) {
      addLog("system", `Going once for ${currentBid.toFixed(2)} Cr to ${currentBidder}...`);
    } else {
      addLog("system", `No bids yet. Going once...`);
    }
  } else if (timeLeft === 4) {
    if (currentBidder) {
      addLog("system", `Going twice for ${currentBid.toFixed(2)} Cr to ${currentBidder}...`);
    } else {
      addLog("system", `No bids yet. Going twice...`);
    }
  } else if (timeLeft === 0) {
    clearInterval(serverTimer);
    if (currentBidder) {
      const rtmTriggered = checkAndTriggerRTM(player, currentBidder, currentBid);
      if (!rtmTriggered) {
        sellPlayer(player, currentBidder, currentBid);
      }
    } else {
      markPlayerUnsold(player);
    }
  }
}

// Socket Connection handling
io.on('connection', (socket) => {
  // Register and sync client state on join
  socket.on('register-client', ({ clientId }) => {
    socket.clientId = clientId;
    socket.emit('init-state', getFullState());
  });

  // Claim Team Handler (maps client ID to a single franchise)
  socket.on('claim-team', ({ clientId, teamId }) => {
    if (!teamId) {
      delete clientTeamMap[clientId];
    } else {
      // Remove this team from anyone else first
      for (const cid in clientTeamMap) {
        if (clientTeamMap[cid] === teamId) {
          delete clientTeamMap[cid];
        }
      }
      clientTeamMap[clientId] = teamId;
    }
    humanTeams = [...new Set(Object.values(clientTeamMap))];
    io.emit('lobby-updated', { humanTeams, clientTeamMap, clientNameMap, franchises });
  });

  // Register User Nickname
  socket.on('register-user', ({ clientId: cid, userName }) => {
    clientNameMap[cid] = userName;
    io.emit('lobby-updated', { humanTeams, clientTeamMap, clientNameMap, franchises });
  });

  // RTM Response Handler
  socket.on('rtm-response', ({ claim }) => {
    if (!isRtmActive || !rtmFormerTeamId) return;
    
    const cid = socket.clientId;
    if (clientTeamMap[cid] !== rtmFormerTeamId) return;
    
    resolveRTM(claim);
  });

  // Update Starting Team Purse (starting budget for mini auctions)
  socket.on('update-team-purse', ({ teamId, budget }) => {
    const val = parseFloat(budget);
    if (isNaN(val) || val <= 0) return;

    // Update the starting reference
    const teamData = franchisesData.find(f => f.id === teamId);
    if (teamData) teamData.budget = val;

    // Update active state
    const teamObj = franchises.find(f => f.id === teamId);
    if (teamObj) teamObj.budget = val;

    io.emit('lobby-updated', { humanTeams, clientTeamMap, clientNameMap, franchises });
  });

  // Change pool mode (Mini vs Mega)
  socket.on('change-pool-mode', ({ mode }) => {
    if (mode === 'mini' || mode === 'mega') {
      poolMode = mode;
      currentAuctionPlayers = getFilteredPlayers();
      io.emit('lobby-updated', { 
        humanTeams, 
        clientTeamMap, 
        clientNameMap,
        franchises,
        poolMode,
        poolSize: currentAuctionPlayers.length 
      });
      addLog("system", `Auction pool mode switched to ${mode.toUpperCase()} (${currentAuctionPlayers.length} players available).`);
    }
  });

  // Start Auction
  socket.on('start-auction', () => {
    currentView = "live";
    addLog("system", "Auction room opened by user.");
    startNewPlayerAuction();
  });

  // Human Bids
  socket.on('place-human-bid', ({ teamId, amount }) => {
    if (!auctionActive || isPaused || humanPassedState[teamId]) return;
    const player = currentAuctionPlayers[currentPlayerIndex];
    const teamObj = franchises.find(f => f.id === teamId);

    if (canTeamBid(teamObj, amount, player)) {
      executeBid(teamId, amount);
    }
  });

  // Human Passes
  socket.on('pass-human-bid', ({ teamId }) => {
    if (humanPassedState[teamId]) return;
    humanPassedState[teamId] = true;

    const team = franchises.find(f => f.id === teamId);
    addLog("system", `${team.shortName} (Friend ${humanTeams.indexOf(teamId) + 1}) passed.`);

    io.emit('pass-updated', { humanPassedState });

    // Check if all humans passed
    const allPassed = humanTeams.every(tid => humanPassedState[tid]);
    if (allPassed) {
      addLog("system", "All human managers have passed. Running remaining auction to resolution...");
    }
  });

  // Control commands
  socket.on('toggle-pause', () => {
    isPaused = !isPaused;
    addLog("system", isPaused ? "Auction paused." : "Auction resumed.");
    io.emit('pause-toggled', { isPaused });
  });

  socket.on('skip-player', () => {
    if (!auctionActive) return;
    const player = currentAuctionPlayers[currentPlayerIndex];
    addLog("system", `Player ${player.name} skipped.`);
    markPlayerUnsold(player);
  });

  socket.on('change-speed', ({ speedStr }) => {
    if (speedStr === "4000") {
      timerDuration = 15;
      cpuBidProbability = 0.20;
    } else if (speedStr === "2000") {
      timerDuration = 10;
      cpuBidProbability = 0.40;
    } else if (speedStr === "1000") {
      timerDuration = 6;
      cpuBidProbability = 0.60;
    }
    if (timeLeft > timerDuration) {
      timeLeft = timerDuration;
    }
    io.emit('speed-updated', { timerDuration, cpuBidProbability, timeLeft });
  });

  // View Switched
  socket.on('change-view', ({ viewId }) => {
    currentView = viewId;
    io.emit('view-updated', { currentView });
  });
});

// Run server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`Access on same Wi-Fi using your local IP (e.g. http://${getLocalIPAddress()}:${PORT})`);
});
