const PubSub = require('../helpers/pub_sub.js');

const LandingView = function(container){
  this.container = container;

};

LandingView.prototype.bindEvent = function () {
console.log('LandingView Integrated');
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

  const gifContainer = document.createElement('div')
  gifContainer.id = 'gif'

  this.renderGif(gifContainer);


  const startButton = this.createStartButton();


  this.container.appendChild(landingContainer);

  landingContainer.appendChild(gifContainer);
  this.container.appendChild(startButton);

};

LandingView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h2');
  heading.textContent = textContent;
  return heading;
};

LandingView.prototype.renderGif = function (gifContainer) {
  const gif = document.createElement('img');
  gif.classList.add('landing-gif');
  gif.src = './images/cycle01.gif'
  gifContainer.appendChild(gif)
};

LandingView.prototype.createStartButton = function () {
  const button = document.createElement('button');
  button.classList.add('start-btn');
  button.textContent = 'Start the Quiz'
  button.value = 1;

  button.addEventListener('click', (evt) => {
    PubSub.publish('LandingView:start-click', evt.target.value);
  });

  return button;
};

module.exports = LandingView;
