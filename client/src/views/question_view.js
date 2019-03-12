const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(container){
  this.container = container;

};

QuestionView.prototype.bindEvent = function () {
  console.log('QuestionView Integrated');
  PubSub.subscribe('Model:question-loaded', (evt) => {
    this.renderQuestion(evt.detail.question.question);
    this.renderAnswers(evt.detail.question.answers);
    console.log(evt.detail);
  });

};

QuestionView.prototype.renderQuestion = function (question_str) {
  this.container.innerHTML = '';
  const question = document.createElement('h3')
  question.textContent = question_str
  question.classList.add('Question')
  console.log(question);
  this.container.appendChild(question)
};

QuestionView.prototype.renderAnswers = function (answer_ary) {
  const answerList = document.createElement('ul')
  answer_ary.forEach((answer) => {
    let answerItem = document.createElement('li')
    answerItem.textContent = answer;
    answerItem.id = answer;
    answerItem.classList.add('Answer');
    this.container.appendChild(answerItem)
    console.log(answerItem.id);
    answerItem.addEventListener('click', (evt) => {
      PubSub.publish('QuestionView:answerselected',answerItem.id)
    })
  })
};





module.exports = QuestionView;
