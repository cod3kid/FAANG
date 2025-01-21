/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let row = 0;
  let col = 0;
  let maxRow = mat.length - 1;
  let maxCol = mat[0].length - 1;
  let direction = "up";
  let result = [];

  while (!(row < 0 || col < 0 || row > maxRow || col > maxCol)) {
    result.push(mat[row][col]);
    if (direction === "down") {
      if (row === maxRow || col === 0) {
        direction = "up";

        if (row === maxRow) {
          col++;
        } else {
          row++;
        }
      } else {
        row++;
        col--;
      }
    } else {
      if (row === 0 || col === maxCol) {
        direction = "down";
        if (col === maxCol) {
          row++;
        } else {
          col++;
        }
      } else {
        row--;
        col++;
      }
    }
  }
  return result;
};
