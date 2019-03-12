const Highcharts = require('Highcharts');

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
            y: evt.detail.score

        }, {
            name: 'Incorrect',
            color: "red",
            y: 10 - evt.detail.score
        }
      ]
    }]
  })
  this.container.appendChild(resultContainer);

} );

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
