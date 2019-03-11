const PubSub = require('../helpers/pub_sub.js');

const QuestionView = function(container){
  this.container = container;

};

QuestionView.prototype.bindEvent = function () {
  PubSub.subscribe('Model:question-loaded', (evt) => {
    this.renderQuestion(evt.detail.question.question);
    this.renderAnswers(evt.detail.question.answers);
  });
  console.log(evt.detail);
};

QuestionView.prototype.createAnswerButton = function () {
  const answerButton = document.createElement('button');
  answerButton.classList.add('answer');

  answerButton.addEventListener('click', (evt) => {
    PubSub.publish('QuestionView:answerselected', this.container);
  })
  return answerButton;
};

QuestionView.prototype.render = function () {
  this.container.innerHTML = '';

  const questionContainer = document.createElement('div');
  questionContainer.id = 'question';

  const currentQuestion = this.createQuestion(question);
  questionContainer.appendChild(currentQuestion);

  // const answerList = this.createLi(answers);
  // questionContainer.appendChild(answerList);
};



};

QuestionView.prototype.createQuestion = function (textContent) {
  const question = document.createElement('h3');
  question.textContent = textContent;
  return question;
};

QuestionView.prototype.renderAnswers = function (items) {
  this.emptyList();
  items.forEach((item) => this.createAnswerList.createAnswerButton(item));
};

QuestionView.prototype.createAnswerList = function () {
  const answers = document.createElement('ul');
  answers.textContent = textContent;
  return answers;
};

//
// QuestionView.prototype.emptyList= function (items) {
//   this.container.innerHTML = '';
// };
//
// QuestionView.prototype.createLi = function () {
//   const li = document.createElement('li');
//   li.classList.add('answer-list-item');
// };
//
// QuestionView.prototype.renderItem = function (item) {
//   const listItem =
//
// };



module.exports = QuestionView;
