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
    timeLimit: 45
  },
  {
    type: 'wordcloud',
    question: 'Which bird species was your most memorable sighting from Season 3?',
    timeLimit: 60
  },
  {
    type: 'wordcloud',
    question: 'Which area or cell did you enjoy surveying the most this season?',
    timeLimit: 60
  },
  {
    type: 'wordcloud',
    question: 'Who was your favourite birding companion this season? Name them!',
    timeLimit: 60
  },
  {
    type: 'wordcloud',
    question: 'In one word — describe your Season 3 survey experience.',
    timeLimit: 45
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
    timeLimit: 25
  },
  {
    type: 'mcq',
    question: 'Who was the top contributor in Season 3 with the most checklists submitted?',
    options: ['Gaurav Maheshwari', 'Leela Alamalakala', 'Akhil Vasireddy', 'Sriram Reddy'],
    correctIndex: 3,
    timeLimit: 25
  },
  {
    type: 'mcq',
    question: 'How many total checklists were targeted and completed in Season 3?',
    options: ['568', '889', '720', '180'],
    correctIndex: 2,
    timeLimit: 25
  },
  {
    type: 'mcq',
    question: 'Which species was the most widely distributed bird in Hyderabad during Feb 2026?',
    options: ['Red-vented Bulbul', 'Ashy Prinia', 'Purple Sunbird', 'Spotted Dove'],
    correctIndex: 2,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'How many bird species were recorded during Season 3 (Feb 2026)?',
    options: ['166', '195', '218', '209'],
    correctIndex: 2,
    timeLimit: 25
  },
  {
    type: 'mcq',
    question: 'What was the most abundant bird species in Hyderabad during Feb 2026?',
    options: ['Rock Pigeon', 'Eastern Cattle-Egret', 'Red-vented Bulbul', 'Rosy Starling'],
    correctIndex: 3,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'The HBA survey divides Hyderabad into cells and subcells. How many total subcells are there?',
    options: ['45', '720', '180', '360'],
    correctIndex: 2,
    timeLimit: 25
  },
  {
    type: 'mcq',
    question: 'How many total volunteering hours were logged during Season 3?',
    options: ['568', '720', '889', '872'],
    correctIndex: 3,
    timeLimit: 25
  },

  // ── MEDIUM ──

  {
    type: 'mcq',
    question: 'By what percentage did the Rosy Starling population increase between Feb 2025 and Feb 2026?',
    options: ['83%', '76%', '25%', '259%'],
    correctIndex: 3,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'What percentage of species composition changed between the two winters of 2025 and 2026?',
    options: ['10.5%', '21.5%', '36%', '50.7%'],
    correctIndex: 1,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'How many species were recorded in Feb 2026 that were NOT seen in Feb 2025?',
    options: ['13', '52', '36', '16'],
    correctIndex: 2,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'Weather conditions in Feb 2026 were notably different from 2025. Which best describes the change?',
    options: ['Hotter and drier', 'Cooler, more humid and hazier', 'Windier with clear skies', 'Same as 2025'],
    correctIndex: 1,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'Which area saw the biggest species percentage INCREASE from Feb 2025 to Feb 2026?',
    options: ['Moinabad (+109%)', 'Madaram (+118%)', 'Thimmaipalli (+145%)', 'Hyderabad (+132%)'],
    correctIndex: 2,
    timeLimit: 35
  },
  {
    type: 'mcq',
    question: 'What was the peak birding activity window observed in Season 3?',
    options: ['5:30 AM – 7:30 AM', '7:00 AM – 10:00 AM', '6:30 AM – 9:00 AM', '6:00 AM – 8:30 AM'],
    correctIndex: 2,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'Which of these was the most species-rich cell consistently across both winters?',
    options: ['Himayat Sagar – Kothwalguda (Cell 6)', 'Malkajgiri – AOC (Cell 30)', 'Secunderabad – Lakdikapool (Cell 22)', 'Madhapur – KPHB (Cell 16)'],
    correctIndex: 0,
    timeLimit: 35
  },
  {
    type: 'mcq',
    question: 'How many new winter migrant species were recorded in Feb 2026 that were NOT present in Feb 2025?',
    options: ['6', '37', '52', '16'],
    correctIndex: 3,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'What total distance (in km) did volunteers cover during Season 3?',
    options: ['1026 km', '1148 km', '1086 km', '889 km'],
    correctIndex: 2,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'What is the IUCN conservation status of the Indian Roller?',
    options: ['Least Concern', 'Vulnerable', 'Near Threatened', 'Endangered'],
    correctIndex: 2,
    timeLimit: 30
  },

  // ── HARD ──

  {
    type: 'mcq',
    question: 'Which species saw the sharpest population DECLINE between Feb 2025 and Feb 2026?',
    options: ['Indian Robin (–21%)', 'Lesser Whistling-Duck (–35%)', 'Black-winged Stilt (–37%)', 'Great Cormorant (–67%)'],
    correctIndex: 3,
    timeLimit: 35
  },
  {
    type: 'mcq',
    question: 'Which subcell lost over half its recorded species going from Feb 2025 to Feb 2026?',
    options: ['Koheda (–50.7%)', 'Himayatsagar (–35.6%)', 'Ghatkesar (–39.1%)', 'Nadargul Rural (–54.2%)'],
    correctIndex: 3,
    timeLimit: 35
  },
  {
    type: 'mcq',
    question: 'What was the occurrence rate of the Indian Roller during the Feb 2026 survey?',
    options: ['3.1%', '0.4%', '4.6%', '12.9%'],
    correctIndex: 2,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'Which rare species was spotted at subcell 179 Yadgarpalle during Season 3?',
    options: ['Bonelli\'s Eagle', 'Long-legged Buzzard', 'Indian Pitta', 'Plaintive Cuckoo'],
    correctIndex: 2,
    timeLimit: 35
  },
  {
    type: 'mcq',
    question: 'The Indian Peafowl is listed under which schedule of the Wildlife Protection Act?',
    options: ['Not protected', 'Schedule-III', 'Schedule-II', 'Schedule-I'],
    correctIndex: 3,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'What was the total number of individual Rosy Starlings recorded in Feb 2026?',
    options: ['7,227', '2,791', '10,018', '9,737'],
    correctIndex: 2,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'How many species classed as invertebrate feeders were recorded in Feb 2026?',
    options: ['96', '111', '33', '74'],
    correctIndex: 1,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'What was the Black Kite\'s occurrence rate in the Feb 2026 survey?',
    options: ['22.8%', '12.9%', '16.1%', '25.3%'],
    correctIndex: 2,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'Which species had the second-highest abundance in Feb 2026?',
    options: ['Eastern Cattle-Egret', 'Red-vented Bulbul', 'Barn Swallow', 'Rock Pigeon'],
    correctIndex: 3,
    timeLimit: 30
  },
  {
    type: 'mcq',
    question: 'How many wetland habitat species were recorded in Feb 2026?',
    options: ['57', '70', '64', '74'],
    correctIndex: 2,
    timeLimit: 30
  }

];
