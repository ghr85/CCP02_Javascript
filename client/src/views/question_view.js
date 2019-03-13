const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(container){
  this.container = container;
  this.questionViewContainer = null;
  this.questionContainer = null;
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

  this.questionViewContainer = document.createElement('div');
  this.questionViewContainer.classList.add('questionViewContainer');
  this.container.appendChild(this.questionViewContainer);


  this.questionContainer = document.createElement('div');
  this.questionContainer.classList.add('questionContainer');
  this.questionViewContainer.appendChild(this.questionContainer)

  const question = document.createElement('h3')
  question.textContent = question_str
  question.classList.add('Question')
  this.questionContainer.appendChild(question)
};

QuestionView.prototype.renderImage = function (img_pg) {

  const image_container = document.createElement('div');
  image_container.classList.add('image_container')
  this.questionViewContainer.appendChild(image_container);

  const image = document.createElement('img');
  image.classList.add('question-image');
  image.src = img_pg;
  image_container.appendChild(image);

};

QuestionView.prototype.renderAnswers = function (answer_ary) {
  const answerList = document.createElement('ul')
  answer_ary.forEach((answer) => {
    let answerItem = document.createElement('li')
    answerItem.textContent = answer;
    answerItem.id = answer;
    answerItem.classList.add('Answer');
    this.questionContainer.appendChild(answerItem)
    answerItem.addEventListener('click', (evt) => {
      PubSub.publish('QuestionView:answerselected',answerItem.id)
    })
  })
};


module.exports = QuestionView;
