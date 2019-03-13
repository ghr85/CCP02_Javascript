const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(container){
  this.container = container;

};

QuestionView.prototype.bindEvent = function () {
  console.log('QuestionView Integrated');
  PubSub.subscribe('Model:question-loaded', (evt) => {
    this.renderQuestion(evt.detail.question.question);
    this.renderAnswers(evt.detail.question.answers);
    this.renderImage(evt.detail.question.image);
  });

};

QuestionView.prototype.renderQuestion = function (question_str) {
  this.container.innerHTML = '';
  const question = document.createElement('h3')
  question.textContent = question_str
  question.classList.add('Question')
  this.container.appendChild(question)
};

QuestionView.prototype.renderImage = function (img_pg) {
  const image = document.createElement('img');
  image.classList.add('image-size');
  image.src = img_pg;
  this.container.appendChild(image);

};

QuestionView.prototype.renderAnswers = function (answer_ary) {
  const answerList = document.createElement('ul')
  answer_ary.forEach((answer) => {
    let answerItem = document.createElement('li')
    answerItem.textContent = answer;
    answerItem.id = answer;
    answerItem.classList.add('Answer');
    this.container.appendChild(answerItem)
    answerItem.addEventListener('click', (evt) => {
      PubSub.publish('QuestionView:answerselected',answerItem.id)
    })
  })
};





module.exports = QuestionView;
