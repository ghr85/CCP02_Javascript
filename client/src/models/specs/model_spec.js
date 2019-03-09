//Green App
//Model Specifications

//require in testing framework and model being tested
const assert = require('assert');
const model = require('../model.js');

describe('Journey', function() {

  let model1;

  beforeEach(function() {
    model1 = new Model(..default values...);
  });

  it('should perform some function', function() {
    const actual = journey1.parameter_being_tested;
    assert.strictEqual(actual, 'expected_outcome');
  });
});
