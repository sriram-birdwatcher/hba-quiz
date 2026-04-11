// ============================================================
//  HBA QUIZ — QUESTION BANK
//  Edit this file to pick your 5 survey + 12 competitive questions
//  Simply delete or comment out questions you don't want to use
//
//  Question types:
//    type: 'mcq'        → Multiple choice (correctIndex = 0-based index of correct answer)
//    type: 'wordcloud'  → Open text, no correct answer, shows word cloud on host screen
//
//  timeLimit: seconds participants have to answer (default 30 for mcq, 60 for wordcloud)
// ============================================================

window.QUIZ_QUESTIONS = [

  // ─────────────────────────────────────────────
  //  PART 1 — SURVEY EXPERIENCE (pick 5)
  //  These are word cloud questions — no right/wrong
  // ─────────────────────────────────────────────

  {
    type: 'wordcloud',
    question: 'How many survey subcells did you personally cover this season? (Type a number)',
    timeLimit: 20
  },
  {
    type: 'wordcloud',
    question: 'Who was your favourite birding companion this season? Name them!',
    timeLimit: 20
  },
  {
    type: 'wordcloud',
    question: 'In one word — describe your Season 3 survey experience.',
    timeLimit: 20
  },

  // ─────────────────────────────────────────────
  //  PART 2 — COMPETITIVE MCQ (pick 12)
  //  correctIndex: 0=A, 1=B, 2=C, 3=D
  // ─────────────────────────────────────────────

  // ── EASY ──

  {
    type: 'mcq',
    question: 'How many volunteers participated in the HBA Season 3 (Feb 2026) survey?',
    options: ['195', '220', '206', '209'],
    correctIndex: 2,
    points: 100,
    timeLimit: 20
  },
  {
    type: 'mcq',
    question: 'How many total checklists were targeted and completed in Season 3?',
    options: ['568', '889', '720', '180'],
    correctIndex: 2,
    points: 100,
    timeLimit: 20
  },
  {
    type: 'mcq',
    question: 'Which species was the most widely distributed bird in Hyderabad during Feb 2026?',
    options: ['Red-vented Bulbul', 'Ashy Prinia', 'Purple Sunbird', 'Spotted Dove'],
    correctIndex: 2,
    points: 100,
    timeLimit: 20
  },
  {
    type: 'mcq',
    question: 'How many bird species were recorded during Season 3 (Feb 2026)?',
    options: ['166', '195', '218', '209'],
    correctIndex: 2,
    points: 100,
    timeLimit: 20
  },
  {
    type: 'mcq',
    question: 'What was the most abundant bird species in Hyderabad during Feb 2026?',
    options: ['Rock Pigeon', 'Eastern Cattle-Egret', 'Red-vented Bulbul', 'Rosy Starling'],
    correctIndex: 3,
    points: 100,
    timeLimit: 20
  },
  

  // ── MEDIUM ──

  {
    type: 'mcq',
    question: 'By what percentage did the Rosy Starling population increase between Feb 2025 and Feb 2026?',
    options: ['83%', '76%', '125%', '259%'],
    correctIndex: 3,
    points: 150,
    timeLimit: 20
  },
  
  {
    type: 'mcq',
    question: 'Weather conditions in Feb 2026 were notably different from 2025. Which best describes the change?',
    options: ['Hotter and drier', 'Cooler, more humid and hazier', 'Windier with clear skies', 'Same as 2025'],
    correctIndex: 1,
    points: 150,
    timeLimit: 20
  },
  
  {
    type: 'mcq',
    question: 'Which of these was the most species-rich cell consistently across both winters?',
    options: ['Himayat Sagar – Kothwalguda (Cell 6)', 'Malkajgiri – AOC (Cell 30)', 'Secunderabad – Lakdikapool (Cell 22)', 'Madhapur – KPHB (Cell 16)'],
    correctIndex: 0,
    points: 150,
    timeLimit: 20
  },
  
  {
    type: 'mcq',
    question: 'What is the IUCN conservation status of the Indian Roller?',
    options: ['Least Concern', 'Vulnerable', 'Near Threatened', 'Endangered'],
    correctIndex: 2,
    points: 150,
    timeLimit: 20
  },

  // ── HARD ──

  {
    type: 'mcq',
    question: 'Which species saw the sharpest population DECLINE between Feb 2025 and Feb 2026?',
    options: ['Indian Robin (–21%)', 'Lesser Whistling-Duck (–35%)', 'Black-winged Stilt (–37%)', 'Great Cormorant (–67%)'],
    correctIndex: 3,
    points: 200,
    timeLimit: 20
  },
 
  {
    type: 'mcq',
    question: 'How many Indian Rollers are documented during the Feb 2026 survey?',
    options: ['11', '23', '38', '42'],
    correctIndex: 2,
    points: 200,
    timeLimit: 20
  },
  
  {
    type: 'mcq',
    question: 'The Indian Peafowl is listed under which schedule of the Wildlife Protection Act?',
    options: ['Not protected', 'Schedule-III', 'Schedule-II', 'Schedule-I'],
    correctIndex: 3,
    points: 200,
    timeLimit: 20
  },
  {
    type: 'mcq',
    question: 'What was the total number of individual Rosy Starlings recorded in Feb 2026?',
    options: ['7,227', '2,791', '10,018', '8,737'],
    correctIndex: 2,
    points: 200,
    timeLimit: 20
  },
  
  {
    type: 'mcq',
    question: 'How many species classed as invertebrate feeders were recorded in Feb 2026?',
    options: ['96', '111', '33', '74'],
    correctIndex: 1,
    points: 200,
    timeLimit: 20
  },
  
  {
    type: 'mcq',
    question: 'How many wetland habitat species were recorded in Feb 2026?',
    options: ['57', '70', '64', '74'],
    correctIndex: 2,
    points: 200,
    timeLimit: 30
  }

];
