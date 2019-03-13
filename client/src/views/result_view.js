const PubSub = require('../helpers/pub_sub.js');
const Highcharts = require('highcharts')
const ResultView = function(container){
  this.container = container;
  this.resultContainer = null;
  this.incorrectAnsContainer = null;
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

    this.incorrectAnsContainer = document.createElement('div')
    this.incorrectAnsContainer.id = 'incorrectAnswers'
    this.resultContainer.appendChild(this.incorrectAnsContainer);

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
    scoreText.textContent = `Get Yourself Back to School! Here are the ones you got wrong:`
  } else if (score > 3 && score <= 6) {
    scoreText.textContent = 'You Need to Brush Up! Here is where you went wrong:'
  }
  else if (score > 6 && score <= 9)
  {
    scoreText.textContent = 'A for Effort! Only a few mistakes:'
  }
  else if (score == 10)
  {
    scoreText.textContent = 'You Smell Like Trees!'
  }
  else if (score === 0)
  {
    scoreText.textContent = `You're a Planet Killer! Here are the correct answers:`
  }


  return scoreText;



};
ResultView.prototype.createRestartButton = function () {
  const button = document.createElement('button');
  button.id ='home-btn';
  button.textContent = 'Return to the Homepage'
  button.value = 1;

  button.addEventListener('click', (evt) => {
    PubSub.publish('ResultView:restart-click', evt.target.value);

  });
  return button;
};
ResultView.prototype.renderIncorrect = function (score,incorrectAnswerArray) {

  if (score!== 10){
    this.incorrectAnsContainer.innerHTML ='';
    incorrectAnswerArray.forEach((element) => {
      const incorrectContainer = document.createElement('div')
      incorrectContainer.classList.add('incorrectContainer')

      const incorrectQuestion = document.createElement('p')
      incorrectQuestion.textContent = `${element.question}`
      incorrectQuestion.classList.add('incorrectQ')

      const incorrectAnswer = document.createElement('p')
      incorrectAnswer.textContent = `You answered ${element.userAnswer}`
      incorrectAnswer.classList.add('incorrectA')

      const correctAnswer = document.createElement('p')
      correctAnswer.textContent = `The correct answer is ${element.answer}`
      correctAnswer.classList.add('correctA')

      incorrectContainer.appendChild(incorrectQuestion);
      incorrectContainer.appendChild(incorrectAnswer);
      incorrectContainer.appendChild(correctAnswer);
      this.incorrectAnsContainer.appendChild(incorrectContainer);

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
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || "black"
          }
        }
      }
    },
    series: [{

      name: 'result',
      data: [{
        name: "correct",
        color: "rgb(93, 173, 173)",
        y: score

      }, {
        name: 'Incorrect',
        color: "rgb(240, 113, 120)",
        y: 10 - score
      }
    ]
  }]
})
};

module.exports = ResultView;
