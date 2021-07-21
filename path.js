///////////////////////////////////////////////////////////////////////////////
//
// Find the longest path of ascending numbers in a matrix.
//

/* Given a n*n matrix where all numbers are distinct, write a function

pathLength(matrix)

that finds the length of the longest possible path (starting from any cell) 
such that all cells along the path are in increasing order with a difference of 1.

We can move in 4 directions from a given cell (i, j), i.e., we can move to 
(i+1, j) or (i, j+1) or (i-1, j) or (i, j-1) as long as the number in the 
adjacent cells is 1 greater than the current cell. */

// Example input:
var matrixA = [[1, 2, 9],
               [5, 3, 8], 
               [4, 6, 7]];

// pathLength(matrixA) should output 4, as the longest path is [6,7,8,9]

///////////////////////////////////////////////////////////////////////////////

// TODO add memoization
function next(matrix, x = 0, y = 0) {
  const value = matrix[x][y] + 1;
  const n = matrix.length;
  let right = 0, left = 0, down = 0, up = 0;

  if (x + 1 < n && matrix[x+1][y] === value) {
    right = next(matrix, x + 1, y);
  }
  if (x - 1 >= 0 && matrix[x-1][y] === value) {
    left = next(matrix, x - 1, y);
  }
  if (y + 1 < n && matrix[x][y+1] === value) {
    down = next(matrix, x, y + 1);
  }
  if (y - 1 >= 0 && matrix[x][y-1] === value) {
    up = next(matrix, x, y - 1);
  }

	return 1 + Math.max(right, left, down, up);
}

function pathLength(matrix) {
  const n = matrix.length;
  let max = 0;

  for(let x = 0; x < n; x++) { 
    for(let y = 0; y < n; y++) {
      const length = next(matrix, x, y)
      max = Math.max(max, length);
    }
  }

  return max;
}

console.log(pathLength(matrixA)); 
