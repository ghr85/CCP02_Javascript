const PubSub = require('../helpers/pub_sub.js');

const LandingView = function(container){
this.container = container;
};

LandingView.prototype.bindEvent = function () {


  PubSub.subscribe('Model:Factoid-loaded', (evt) => {
    this.render(evt.detail);
  });
};





LandingView.prototype.render = function (factoidString) {
  this.container.innerHTML = '';

  const landingContainer = document.createElement('div');
  landingContainer.id = 'landing';

  const factoid = this.createHeading(factoidString)
  landingContainer.appendChild(factoid);

  const startButton = this.createStartButton();
  landingContainer.appendChild(startButton);

  this.container.appendChild(landingContainer);

};

LandingView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h2');
  heading.textContent = textContent;
  return heading;
};

LandingView.prototype.createStartButton = function () {
  const button = document.createElement('button');
  button.classList.add('start-btn');
  button.textContent = 'Start the Quiz'
  button.value = 1;

  button.addEventListener('click', (evt) => {
    PubSub.publish('LandingView:start-click', evt.target.value);
    console.log(evt.target.value);
  });

  return button;
};

module.exports = LandingView;
