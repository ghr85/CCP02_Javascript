const PubSub = require('../helpers/pub_sub.js');

const QuizView = function (container) {
  this.container = container;
};

QuizView.prototype.bindEvent = function () {
  PubSub.subscribe('Model:question-loaded', (evt) => {
    this.render(evt.detail);
    console.log(evt.detail);
  });
  console.log('QuizView Integrated');
};

QuizView.prototype.render = function () {
  const quizCounterContainer = document.createElement('div');
  quizCounterContainer.id = 'quiz-counter';
  this.container.appendChild(quizCounterContainer);
};

module.exports = QuizView;
