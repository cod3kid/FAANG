/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let zeroIndexes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        zeroIndexes.push([i, j]);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      for (let k = 0; k < zeroIndexes.length; k++) {
        if (i === zeroIndexes[k][0] || j === zeroIndexes[k][1]) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  return matrix;
};

// We can eliminate the third loop using 2 arrays to store row zero and col zero values

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = Array(matrix.length).fill(0);
  let cols = Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 1;
        cols[j] = 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows[i] || cols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};
