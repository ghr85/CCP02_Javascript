// const PubSub = require('./helpers/pub_sub.js');
// const Model = require('./models/model.js');
// const LandingView = require('./views/landing_view.js');
// const QuestionView = require('./views/question_view.js');
// const QuizView = require('./views/quiz_view.js');
// const ResultView = require('./views/result_view.js');
//
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('dom loaded successfully');
//
//   const viewContainer = document.querySelector('#content_parent');
//   const landingView = new LandingView(viewContainer);
//   const model = new Model('http://localhost:3000/api/questions');
//   const infoDivA = document.querySelector('#question-number')
//   const quizView = new QuizView(infoDivA);
//   const questionView = new QuestionView(viewContainer);
//   const resultView = new ResultView(infoDivA);
//
//   landingView.bindEvent();
//   model.bindEvent();
//   questionView.bindEvent();
//   quizView.bindEvent();
//   resultView.bindEvent();
//
// });


const PubSub = require('./helpers/pub_sub.js');
const Model = require('./models/model.js');
const LandingView = require('./views/landing_view.js');
const QuestionView = require('./views/question_view.js');
const QuizView = require('./views/quiz_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
 console.log('dom loaded successfully');

 const viewContainer = document.querySelector('#content_parent');
 const landingView = new LandingView(viewContainer);
 const model = new Model('http://localhost:3000/api/questions');
 const infoDivA = document.querySelector('#question-number')
 const quizView = new QuizView(infoDivA);
 const questionView = new QuestionView(viewContainer);
 const resultView = new ResultView(viewContainer);

 landingView.bindEvent();
 model.bindEvent();
 questionView.bindEvent();
 quizView.bindEvent();
 resultView.bindEvent();

});
