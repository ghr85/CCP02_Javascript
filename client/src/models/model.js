const Factoids = require('./factoids.js');
const PubSub = require('../helpers/pub_sub.js');


const Model = function(){

};

Model.prototype.bindEvent = function () {
  console.log('Model Integrated');
  this.get_landing_quote();
};


Model.prototype.get_landing_quote = function () {
 const factoids = new Factoids();
 console.log(factoids);
  const factoidString = factoids.factoidsArray[Math.floor(Math.random() * factoids.factoidsArray.length)];
  console.log(factoidString);
  return factoidString;
};

Model.prototype.getQuestionView = function () {

};

module.exports = Model;
