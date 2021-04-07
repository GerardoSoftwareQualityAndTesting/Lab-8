var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');
var octalFunctions = require('../OctalConverter')

describe('givenTwoIntegersWhenSumThenSuccess', function () {
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

describe('givenTwoWhenConvertingToOctalThenTwo', function () {
  it('decToOctal(2) = 2', () => {
    // Given
    var dec = 2;
    var expectedResult = 2;

    // When
    var actualResult = octalFunctions.decToOctal(dec);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('givenEightWhenConvertingToOctalThenTen', function () {
  it('decToOctal(8) = 10', () => {
    // Given
    var dec = 8;
    var expectedResult = 10;

    // When
    var actualResult = octalFunctions.decToOctal(dec);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('given95WhenConvertingToOctalThen137', function () {
  it('decToOctal(95) = 137', () => {
    // Given
    var dec = 95;
    var expectedResult = 137;

    // When
    var actualResult = octalFunctions.decToOctal(dec);

    // Then
    assert.strictEqual(expectedResult, actualResult);
  })
})