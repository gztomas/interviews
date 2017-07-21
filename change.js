
/*
A vending machine has the following denominations: 1c, 5c, 10c, 25c, 50c, and $1. Your task is to write a program that will be used in a vending machine to return change. Assume that the vending machine will always want to return the least number of coins or notes. Devise a function getChange(M, P) where M is how much money was inserted into the machine and P the price of the item selected, that returns an array of integers representing the number of each denomination to return.

Example:
  getChange(5, 0.99) should return [1,0,0,0,0,4]
 */

/**
 * @param M
 * @param P
 * @returns {*}
 */
function getChange(M, P) {
  const denominations = [1, 5, 10, 25, 50, 100];
  const result = [0, 0, 0, 0, 0, 0];

  let desiredChange = M * 100 - P * 100;
  let change = 0;
  let currentDenomination = denominations.length - 1;

  while(change !== desiredChange && currentDenomination >= 0) {
    if(change + denominations[currentDenomination] <= desiredChange) {
      change += denominations[currentDenomination];
      result[currentDenomination]++;
    }
    else {
      currentDenomination--;
    }
  }

  return result;
}

console.log(5, 0.99, getChange(5, 0.99));

console.log(getChange(3.14, 1.99), [0,1,1,0,0,1]);
console.log(getChange(4, 3.14), [1,0,1,1,1,0]);
console.log(getChange(0.45, 0.34), [1,0,1,0,0,0]);
