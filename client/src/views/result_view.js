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
    heading.textContent = `You got ${evt.detail} out of 10!`
    resultContainer.appendChild(heading);

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
    // resultContainer.appendChild(this.chartView);

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
