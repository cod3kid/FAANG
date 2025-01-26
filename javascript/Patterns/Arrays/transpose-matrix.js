/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let transposeMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let temp = [];

    for (let j = 0; j < matrix.length; j++) {
      temp.push(matrix[j][i]);
    }
    transposeMatrix.push(temp);
  }
  return transposeMatrix;
};
