/**
 * @params first {start, end} First interval
 * @params second {start, end} Second interval
 */
function thereIsIntersection(a, b) {
  if (isEmpty(a) || isEmpty(b)) {
    return false;
  }

  let aStartIsContainedInB = a.start >= b[0] && a[0] <= b[1];
  let aEndIsContainedInB = a[1] >= b[0] && a[1] <= b[1];
  let aIntervalContainsB = a[0] <= b[0] && a[1] >= b[1];

  return aStartIsContainedInB || aEndIsContainedInB || aIntervalContainsB;
}

function isEmpty() {
  // TBI
}

describe("interval intersection", function () {
  given([
    [{ start: 1, end: 6.5 }, { start: 6.2, end: 20 }, true],
    // a or b empty
    // a and b empty
    // a < b
    // a > b
    // a contains b
    // b contains a
    // a <= b
    // a >= b
  ]).it("detects two intervals are being intersected", function (
    intervalA,
    intervalB,
    expectedResult
  ) {
    expect(thereIsIntersection(intervalA, intervalB).toEqual(expectedResult));
  });
});
