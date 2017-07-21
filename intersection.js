/**
 * @params first {start, end} First interval
 * @params second {start, end} Second interval
 */
function thereIsIntersection(inta, intb) {

  if (isEmpty(inta) || isEmpty(intb)) {
    return false;
  }

  let aStartIsContainedInB = inta.start >= intb[0] && inta[0] <= intb[1];
  let aEndIsContainedInB = inta[1] >= intb[0] && inta[1] <= intb[1];
  let aIntervalContainsB = inta[0] <= intb[0] && inta[1] >= intb[1];

  return aStartIsContainedInB || aEndIsContainedInB || aIntervalContainsB;
}

function isEmpty() {
}

describe('interval intersection', function() {
  given([
    [{start: 1, end: 6.5}, {start: 6.2, end: 20}, true],
    // uno vacio
    // dos vacios
    // a < b
    // a > b
    // a contains b
    // b contains a
    // a <= b
    // a >= b
  ]).it('detects two intervals are being intersected',
    function(intervalA, intervalB, expectedResult) {
      expect(thereIsIntersection(intervalA, intervalB).toEqual(expectedResult));
    });
});