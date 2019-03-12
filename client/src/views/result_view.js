const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvent = function () {
  console.log('ResultView Integrated');
  PubSub.subscribe('Model:FinalScore', (evt) => {
    this.container.innerHTML = '';

    const resultContainer = document.createElement('div');
    resultContainer.id = 'result_container';

    const heading = document.createElement('h3');
    heading.textContent = 'Result...'
    resultContainer.appendChild(heading);

    const result = document.createElement('p');
    result.textContent = `You got ${evt.detail.score} out of 10!`
    resultContainer.appendChild(result);

    const scoreComment = this.checkScore(evt.detail.score);
    resultContainer.appendChild(scoreComment);

    if (evt.detail.score !== 10){
      const wrongUns = document.createElement('p');
      wrongUns.textContent = `Here are the questions you got wrong`
      resultContainer.appendChild(wrongUns);
      evt.detail.incorrectAnswers.forEach((element) => {
        const incorrectQuestion = document.createElement('p')
        incorrectQuestion.textContent = `${element.question}`
        incorrectQuestion.classList.add('incorrectQ')

        const incorrectAnswer = document.createElement('p')
        incorrectAnswer.textContent = `You answered ${element.userAnswer}`
        incorrectAnswer.classList.add('incorrectA')

        const correctAnswer = document.createElement('p')
        correctAnswer.textContent = `The correct answer is ${element.answer}`
        correctAnswer.classList.add('correctA')

        resultContainer.appendChild(incorrectQuestion);
        resultContainer.appendChild(incorrectAnswer);
        resultContainer.appendChild(correctAnswer);
      })
    };

    const restartButton = this.createRestartButton();
    resultContainer.appendChild(restartButton);

    this.container.appendChild(resultContainer);
  });
};

ResultView.prototype.checkScore = function (score) {
  const scoreText = document.createElement('p')
  scoreText.classList.add('scoreComment')
  if (score > 0 && score <= 3)
  {
    scoreText.textContent = `Get Yourself Back to School!`
  } else if (score > 3 && score <= 6) {
    scoreText.textContent = 'You Need to Brush Up!'
  }
  else if (score > 6 && score <= 9)
  {
    scoreText.textContent = 'A for Effort!'
  }
  else if (score == 10)
  {
    scoreText.textContent = 'You Smell Like Trees!'
  }
  else if (score === 0)
  {
    scoreText.textContent = `You're a Planet Killer!`
  }


  return scoreText;



};

ResultView.prototype.createRestartButton = function () {
  const button = document.createElement('button');
  button.id ='home-btn';
  button.textContent = 'Return Home'
  button.value = 1;

  button.addEventListener('click', (evt) => {
    PubSub.publish('ResultView:restart-click', evt.target.value);

  });
  return button;
};

module.exports = ResultView;
