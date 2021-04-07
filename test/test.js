var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');

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