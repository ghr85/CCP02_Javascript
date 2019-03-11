const Factoids = require('./factoids.js');
const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Model = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
  this.allQuestionsArray = null;
};

Model.prototype.bindEvent = function () {
  console.log('Model Integrated');
  PubSub.subscribe('LandingView:Page-Loaded', (evt) => {
    PubSub.publish('Model:Factoid-loaded', this.get_landing_quote);
  });
  this.getQuestionData()

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
    this.allQuestionsArray = shuffledQuestions;
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
};


// var quiz = this.quizes[Math.floor(Math.random() * this.quizes.length)];
// console.log(quiz.question);
// const questionView = new QuestionView(this.container, quiz);
//    const selectedAnswer = questionView.render();
//
//    PubSub.publish('one quiz submitted', selectedAnswer)
//
// };


module.exports = Model;
