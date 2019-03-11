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
 answerItem.name = answer;
 answerItem.classList.add('Answer');
 this.container.appendChild(answerItem)
 console.log(answerItem);
 answerItem.addEventListener('click', (evt) => {
 PubSub.publish('QuestionView:answerselected',this.name)
})
})
};

QuestionView.prototype.createAnswerButton = function () {
  const answerButton = document.createElement('button');
  answerButton.classList.add('answer');

  answerButton.addEventListener('click', (evt) => {
    PubSub.publish('QuestionView:answerselected', this.container);
  })
  return answerButton;
};

// QuestionView.prototype.render = function () {
//   this.container.innerHTML = '';
//
//   const questionContainer = document.createElement('div');
//   questionContainer.id = 'question';
//
//   const currentQuestion = this.createQuestion(question);
//   questionContainer.appendChild(currentQuestion);
//
//   // const answerList = this.createLi(answers);
//   // questionContainer.appendChild(answerList);
// };


QuestionView.prototype.createQuestion = function (textContent) {
  const question = document.createElement('h3');
  question.textContent = textContent;
  return question;
};


// QuestionView.prototype.createQuestion = function (textContent) {
//   const question = document.createElement('h3');
//   question.textContent = textContent;
//   return question;
// };
//
// QuestionView.prototype.renderAnswers = function (items) {
//   this.emptyList();
//   items.forEach((item) => this.createAnswerList.createAnswerButton(item));
// };
//
// QuestionView.prototype.createAnswerList = function () {
//   const answers = document.createElement('ul');
//   answers.textContent = textContent;
//   return answers;
// };

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
