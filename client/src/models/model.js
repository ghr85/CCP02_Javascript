const Factoids = require('./factoids.js');
const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Model = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.allQuestionsArray = null;
  this.questionNumber = 0;
  this.currentQuestion = null;
  this.userScore = 0;
  this.inCorrectQuestionArray = [];
};

Model.prototype.bindEvent = function () {
  console.log('Model Integrated');

  PubSub.publish('Model:Factoid-loaded', this.get_landing_quote());

  this.getQuestionData();
  PubSub.subscribe('LandingView:start-click', (evt) => {
    this.getQuestion();
  });
  PubSub.subscribe('QuestionView:answerselected', (evt) => {
    if (this.currentQuestion.correct == evt.detail ) {
      this.userScore += 1;
    } else {
      this.inCorrectQuestionArray.push({
        'userAnswer': evt.detail,
        'answer': this.currentQuestion.correct,
        'question': this.currentQuestion.question
      })
    }
    if (this.questionNumber < 10) {
      this.getQuestion();
    }
    else {
      PubSub.publish('Model:FinalScore', {
        'score': this.userScore,
        'incorrectAnswers': this.inCorrectQuestionArray});
      };

    });
    PubSub.subscribe('ResultView:restart-click', (evt) => {
      this.reset();
    })
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
          "answers": this.shuffle(object.incorrect_answers),
          "image": object.image_url
        }
      });
    });
  };
  Model.prototype.shuffle = function (array) {
    let currentIndex = array.length
    while(--currentIndex > 0){
      let randomIndex = Math.floor(Math.random() * (currentIndex+1))
      let temporaryHold = array[randomIndex];
      array[randomIndex] = array[currentIndex]
      array[currentIndex] = temporaryHold
    }
    return array;
  };

  Model.prototype.getQuestion = function () {
    this.questionNumber += 1;
    this.currentQuestion = this.allQuestionsArray[this.questionNumber];
    PubSub.publish("Model:question-loaded", {
      "questionNumber": this.questionNumber,
      "question": this.currentQuestion,
      // "image": this.image_url
      // console.log("image");
    });
  };

  Model.prototype.reset = function () {
    this.questionNumber = 0;
    this.userScore = 0;
    this.getQuestionData();
    PubSub.publish('Model:Factoid-loaded', this.get_landing_quote())
  };



  module.exports = Model;
