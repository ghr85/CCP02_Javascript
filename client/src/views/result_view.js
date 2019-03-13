const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts')
const ResultView = function(container){
  this.container = container;
  this.resultContainer = null;
};

ResultView.prototype.bindEvent = function () {
  console.log('ResultView Integrated');
  PubSub.subscribe('Model:FinalScore', (evt) => {
    this.container.innerHTML = '';
    this.resultContainer = document.createElement('div');
    this.resultContainer.id = 'result_container';

    const heading = document.createElement('h1');
    heading.textContent = 'And the Results are in....'
    this.resultContainer.appendChild(heading);

    this.renderChart(evt.detail.score);
    const result = document.createElement('p');
    result.textContent = `You got ${evt.detail.score} out of 10!`
    this.resultContainer.appendChild(result);

    const scoreComment = this.checkScore(evt.detail.score);
    this.resultContainer.appendChild(scoreComment);

    this.renderIncorrect(evt.detail.score,evt.detail.incorrectAnswers)


    const restartButton = this.createRestartButton();
    this.resultContainer.appendChild(restartButton);


    this.container.appendChild(this.resultContainer);

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
ResultView.prototype.renderIncorrect = function (score,incorrectAnswerArray) {
  if (score!== 10){
    const wrongUns = document.createElement('p');
    wrongUns.textContent = `Here are the questions you got wrong`
    this.resultContainer.appendChild(wrongUns);
    incorrectAnswerArray.forEach((element) => {
      const incorrectQuestion = document.createElement('p')
      incorrectQuestion.textContent = `${element.question}`
      incorrectQuestion.classList.add('incorrectQ')

      const incorrectAnswer = document.createElement('p')
      incorrectAnswer.textContent = `You answered ${element.userAnswer}`
      incorrectAnswer.classList.add('incorrectA')

      const correctAnswer = document.createElement('p')
      correctAnswer.textContent = `The correct answer is ${element.answer}`
      correctAnswer.classList.add('correctA')

      this.resultContainer.appendChild(incorrectQuestion);
      this.resultContainer.appendChild(incorrectAnswer);
      this.resultContainer.appendChild(correctAnswer);
    })
  };
};
ResultView.prototype.renderChart = function (score) {
  Highcharts.chart(this.container, {
    chart: {
      renderTo: 'container',
      type: 'pie'
    },
    title: {
      text: 'Your Score'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'brown',
            backgroundColor: (Highcharts.theme && Highcharts.theme.contrastBackgroundColor) || 'red'
          }
        }
      }
    },
    series: [{

      name: 'result',
      data: [{
        name: "correct",
        color: "green",
        y: score

      }, {
        name: 'Incorrect',
        color: "red",
        y: 10 - score
      }
    ]
  }]
})
};

module.exports = ResultView;
