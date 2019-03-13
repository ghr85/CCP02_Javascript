const PubSub = require('../helpers/pub_sub.js');

const QuizView = function (container) {
  this.container = container;
};

QuizView.prototype.bindEvent = function () {
  PubSub.subscribe('Model:question-loaded', (evt) => {
    this.render(evt.detail);
  });
  console.log('QuizView Integrated');
};


QuizView.prototype.render = function (questionNumber) {
  this.container.innerHTML = '';
  const quizCounterContainer = document.createElement('p');
  quizCounterContainer.textContent = `Question ${questionNumber.questionNumber} of 10`;

  this.container.appendChild(quizCounterContainer);

};

module.exports = QuizView;
