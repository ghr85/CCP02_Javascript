use quiz;
db.dropDatabase();

db.questions.insertMany([
{
  "qid": "1",
"type": "multiple",
"image_url": "./images/images/tv01.jpg",
"difficulty": "medium",
"question": "Recycling One Aluminum Can Will Power a TV For How Long?",
"correct_answer": "3 Hours",
"incorrect_answers": [
"30 Minutes",
"1 Hour",
"6 Hours"
]
},
{
    "qid": "2",
"type": "multiple",
"image_url": "./images/rainforrest01.jpg",
"difficulty": "medium",
"question": "How Many Trees are Cut Down Each Day to produce Toilet Paper?",
"correct_answer": "25,000",
"incorrect_answers": [
"1000",
"50,000",
"10,000"
]
},
{
    "qid": "3",
"type": "multiple",
"image_url": "./images/earth01.jpeg",
"difficulty": "medium",
"question": "American Companies Alone Use Enough Paper to Encircle the Earth How Many Times?",
"correct_answer": "3",
"incorrect_answers": [
"1",
"2",
"5"
]
},
{
    "qid": "4",
"type": "multiple",
"image_url": "./images/deforrestation01.jpg",
"difficulty": "medium",
"question": "How Many Acres Per Minute are Cut Down in Rainforests?",
"correct_answer": "100",
"incorrect_answers": [
"200",
"1000",
"50"
]
},
{
    "qid": "5",
"type": "multiple",
"image_url": "./images/glassbottle01.jpeg",
"difficulty": "medium",
"question": "A Glass Bottle Made in Our Time Will Take How Many Years to Decompose?",
"correct_answer": "4,000",
"incorrect_answers": [
"1,000",
"10,000",
"500"
]
},
{
    "qid": "6",
"type": "multiple",
"image_url": "./images/landfill01.jpeg",
"difficulty": "medium",
"question": "Packaging Materials Make Up Which Percentage of Landfills?",
"correct_answer": "35%",
"incorrect_answers": [
"60%",
"70%",
"85%"
]
},
{
    "qid": "7",
"type": "boolean",
"image_url": "./images/goldentoad01.jpeg",
"difficulty": "medium",
"question": "The Golden Toad Was the First Species To Go Extinct",
"correct_answer": "False",
"incorrect_answers": [
"True"
]
},
{
    "qid": "8",
"type": "multiple",
"image_url": "./images/comic02.jpg",
"difficulty": "medium",
"question": "Climate Change Costs the U.S How Much Per Year?",
"correct_answer": "$100 Billon",
"incorrect_answers": [
"$1 Billon",
"$50 Billon",
"$150 Billon"
]
},
{
    "qid": "9",
"type": "boolean",
"image_url": "./images/riverpollution01.jpg",
"difficulty": "medium",
"question": "Efforts to maintain and purify our drinking water can take a huge toll on carbon emissions.",
"correct_answer": "True",
"incorrect_answers": [
"False"
]
},
{
    "qid": "10",
"type": "multiple",
"image_url": "./images/comic01.png",
"difficulty": "medium",
"question": "In the 10,000 years before the Industrial Revolution in 1751, carbon dioxide levels rose less than 1 percent. Since then, they've risen by:",
"correct_answer": "43%",
"incorrect_answers": [
"73%",
"47%",
"11%"
]
},
{
    "qid": "11",
"type": "multiple",
"image_url": "./images/comic04.jpg",
"difficulty": "medium",
"question": "We produce more than 30 billion tons of carbon dioxide per year. Where does the majority of it end up?",
"correct_answer": "It Lingers in the Atmosphere",
"incorrect_answers": [
"It is Inhaled by Trees for Photosynthesis",
"It Enters Our Oceans",
"It is Inhaled by Humans"
]
},
{
    "qid": "12",
"type": "multiple",
"image_url": "./images/seapollution01.jpg",
"difficulty": "medium",
"question": "What Percentage of our Planet's Water is Drinkable?",
"correct_answer": "3%",
"incorrect_answers": [
"10%",
"5%",
"50%"
]
},
{
    "qid": "13",
"type": "multiple",
"image_url": "./images/icecaps01.jpg",
"difficulty": "medium",
"question": "Climate Scientists Predict That Increasing Carbon Dioxide Levels in the Atmosphere Will Result In:",
"correct_answer": "All of the Above",
"incorrect_answers": [
"More Acidic Oceans",
"Decreased Soil Moisture",
"Stronger Hurricanes"
]
},
{
    "qid": "14",
"type": "multiple",
"image_url": "./images/trump01.jpeg",
"difficulty": "medium",
"question": "The Average American Adds How Much Carbon Dioxide to the Atmosphere Per Year?",
"correct_answer": "20 Tons",
"incorrect_answers": [
"Half a Ton",
"1 Ton",
"10 Tons"
]
},
{
    "qid": "15",
"type": "multiple",
"image_url": "./images/solarsystem01.jpeg",
"difficulty": "medium",
"question": "Which Planets Have Carbon Dioxide in Their Atmosphere?",
"correct_answer": "Earth, Venus and Mars",
"incorrect_answers": [
"Earth, Venus, Mars and Jupiter",
"Earth and Venus",
"Earth"
]
},
{
    "qid": "16",
"type": "multiple",
"image_url": "./images/emissions01.png",
"difficulty": "medium",
"question": "Which of the following would have the biggest impact on reducing carbon emissions?",
"correct_answer": "Shutting Down all Fossil Fuel Power Plants",
"incorrect_answers": [
"Growing Our Own Vegetables",
"Taking all Fossil Fuel-Burning Vehicles off the Road",
"Stopping Deforestation"
]
},
{
    "qid": "17",
"type": "multiple",
"image_url": "./images/planettemp01.jpg",
"difficulty": "medium",
"question": "If humans stopped emitting carbon dioxide tomorrow, what would happen to global temperatures?",
"correct_answer": "They Would Continue to Rise",
"incorrect_answers": [
"They Would Immediately Begin to Drop",
"They Would Stop Rising, Flatten out and Then Drop",
"Nothing"
]
},
{
    "qid": "18",
"type": "multiple",
"image_url": "./images/carboncapture01.png",
"difficulty": "medium",
"question": "Norwegian oil company Statoil’s Sleipner project in the North Sea is considered the world’s first demonstration of carbon capture and underground storage. When was it started?",
"correct_answer": "1996",
"incorrect_answers": [
"1976",
"1986",
"2006"
]
},
{
    "qid": "19",
"type": "multiple",
"image_url": "./images/chemical01.jpg",
"difficulty": "medium",
"question": "The physical and chemical absorption of CO2 can be achieved with all of the following EXCEPT:",
"correct_answer": "Water",
"incorrect_answers": [
"Solvents",
"Sorbents",
"Cryogenic Techniques"
]
},
{
    "qid": "20",
"type": "multiple",
"image_url": "./images/toxicair02.jpg",
"difficulty": "medium",
"question": "About how much of the flue gas leaving a coal-fired power plant is CO2?",
"correct_answer": "12%",
"incorrect_answers": [
"2%",
"20%",
"50%"
]
}
]
);
