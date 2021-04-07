var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');
var octalFunctions = require('../OctalConverter')

describe('givenTwoIntegersWhenSuThenSuccess', function () {
  it('sum(1, 2) = 3', () => {
    // Given
    var a = 1;
    var b = 2;
    var expectedResult = 3;

    // When
    var actualResult = javascriptFunctions.sum(a, b);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('givenOneWhenConvertingToOctalThenOne', function () {
  it('decToOctal(1) = 1', () => {
    // Given
    var dec = 1;
    var expectedResult = 1;

    // When
    var actualResult = octalFunctions.decToOctal(dec);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  })
})