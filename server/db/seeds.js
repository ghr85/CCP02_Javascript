use quiz;
db.dropDatabase();

db.questions.insertMany([
{
  "qid": "1",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "What is the colour of unoxidized blood?",
"correct_answer": "Red",
"incorrect_answers": [
"Blue",
"Purple",
"Green"
]
},
{
    "qid": "2",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "The humerus, paired radius, and ulna come together to form what joint?",
"correct_answer": "Elbow",
"incorrect_answers": [
"Knee",
"Sholder",
"Ankle"
]
},
{
    "qid": "3",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "What was the first living creature in space?",
"correct_answer": "Fruit Flies ",
"incorrect_answers": [
"Monkey",
"Dog",
"Mouse"
]
},
{
    "qid": "4",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "What mineral has the lowest number on the Mohs scale?",
"correct_answer": "Talc",
"incorrect_answers": [
"Quartz",
"Diamond",
"Gypsum"
]
},
{
    "qid": "5",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
"correct_answer": "low, all",
"incorrect_answers": [
"low, some",
"high, all",
"high, some"
]
},
{
    "qid": "6",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "The &quot;Tibia&quot; is found in which part of the body?",
"correct_answer": "Leg",
"incorrect_answers": [
"Arm",
"Hand",
"Head"
]
},
{
    "qid": "7",
"category": "Science & Nature",
"type": "boolean",
"difficulty": "medium",
"question": "Type 1 diabetes is a result of the liver working improperly.",
"correct_answer": "False",
"incorrect_answers": [
"True"
]
},
{
    "qid": "8",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "Where did the dog breed &quot;Chihuahua&quot; originate?",
"correct_answer": "Mexico",
"incorrect_answers": [
"France",
"Spain",
"Russia"
]
},
{
    "qid": "9",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "What polymer is used to make CDs, safety goggles and riot shields?",
"correct_answer": "Polycarbonate",
"incorrect_answers": [
"Rubber",
"Nylon",
"Bakelite"
]
},
{
    "qid": "10",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "What is the atomic number of the element Strontium?",
"correct_answer": "38",
"incorrect_answers": [
"73",
"47",
"11"
]
},
{
    "qid": "11",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "After which Danish city is the 72th element on the periodic table named?",
"correct_answer": "Copenhagen",
"incorrect_answers": [
"Odense",
"Herning",
"Skagen"
]
},
{
    "qid": "12",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "Myopia is the scientific term for which condition?",
"correct_answer": "Shortsightedness",
"incorrect_answers": [
"Farsightedness",
"Double Vision",
"Clouded Vision"
]
},
{
    "qid": "13",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
"correct_answer": "4",
"incorrect_answers": [
"3",
"5",
"6"
]
},
{
    "qid": "14",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "Which of these elements on the Periodic Table is a Noble Gas?",
"correct_answer": "Neon",
"incorrect_answers": [
"Potassium",
"Iodine",
"Colbalt"
]
},
{
    "qid": "15",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "Who made the discovery of X-rays?",
"correct_answer": "Wilhelm Conrad R&ouml;ntgen",
"incorrect_answers": [
"Thomas Alva Edison",
"James Watt",
"Albert Einstein"
]
},
{
    "qid": "16",
"category": "Science & Nature",
"type": "boolean",
"difficulty": "medium",
"question": "In the periodic table, Potassium&#039;s symbol is the letter K.",
"correct_answer": "True",
"incorrect_answers": [
"False"
]
},
{
    "qid": "17",
"category": "Science & Nature",
"type": "boolean",
"difficulty": "medium",
"question": "Sugar contains fat.",
"correct_answer": "False",
"incorrect_answers": [
"True"
]
},
{
    "qid": "18",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "What is the largest living organism currently known to man?",
"correct_answer": "Honey Fungus",
"incorrect_answers": [
"Blue Whale",
"Redwood Tree",
"The Coral Reef"
]
},
{
    "qid": "19",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "Approximately how long is a year on Uranus?",
"correct_answer": "84 Earth years",
"incorrect_answers": [
"47 Earth years",
"62 Earth years",
"109 Earth years"
]
},
{
    "qid": "20",
"category": "Science & Nature",
"type": "multiple",
"difficulty": "medium",
"question": "Which of the following men does not have a chemical element named after him?",
"correct_answer": "Sir Isaac Newton",
"incorrect_answers": [
"Albert Einstein",
"Niels Bohr",
"Enrico Fermi"
]
}
]
);
