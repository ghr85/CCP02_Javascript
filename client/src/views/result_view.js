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
