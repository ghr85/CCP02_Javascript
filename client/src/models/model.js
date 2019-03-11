const Factoids = require('./factoids.js');
const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Model = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.allQuestionsArray = null;
  this.questionNumber = 0;
  this.currentQuestion = null;
};

Model.prototype.bindEvent = function () {
  console.log('Model Integrated');
  PubSub.subscribe('LandingView:Page-Loaded', (evt) => {
    PubSub.publish('Model:Factoid-loaded', this.get_landing_quote);

  });
  this.getQuestionData();
  PubSub.subscribe('LandingView:start-click', (evt) => {
     this.questionNumber += evt.detail;
     Publish("Model:question-loaded", {
       "questionNumber": this.questionNumber,
       "question": this.currentQuestion
     } )
  });
};

Model.prototype.get_landing_quote = function () {
 const factoids = new Factoids();
  const factoidString = factoids.factoidsArray[Math.floor(Math.random() * factoids.factoidsArray.length)];
  return factoidString;
};

Model.prototype.getQuestionData = function () {
  this.request.get()
  .then((data) => {
    const shuffledQuestions = this.shuffle(data);
    this.allQuestionsArray = shuffledQuestions.map((object)=>{
      return {
        "question":object.question,
        "answer_count": object.incorrect_answers.push(object.correct_answer),
        "correct": object.correct_answer,
        "answers": this.shuffle(object.incorrect_answers)
      }
    });
  });
};

Model.prototype.shuffle= function (ary) {
  let shuffleArray = ary;
  let i = shuffleArray.length, j, temp;
  while(--i > 0 ) {
    j = Math.floor(Math.random() * (i+1));
    temp = shuffleArray[j];
    shuffleArray[j] = shuffleArray[i];
    shuffleArray[i] = temp;
  }
  return shuffleArray;
};

Model.prototype.getQuestion = function () {
  this.currentQuestion = this.allQuestionsArray[this.questionNumber]
};




module.exports = Model;
