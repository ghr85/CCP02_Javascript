const PubSub = require('./helpers/pub_sub.js');
const Model = require('./models/model.js');
const LandingView = require('./views/landing_view.js');
const QuestionView = require('./views/question_view.js');
const QuizView = require('./views/quiz_view.js');
const ResultView = require('./views/quiz_view.js');

document.addEventListener('DOMContentLoaded', () => {
console.log('dom loaded successfully');

const model = new Model;
model.bindEvent();

const landingView = new LandingView;
landingView.bindEvent();

const quizView = new QuizView;
quizView.bindEvent();

const questionView = new QuestionView;
questionView.bindEvent();

const resultView = new ResultView;
resultView.bindEvent();

});
