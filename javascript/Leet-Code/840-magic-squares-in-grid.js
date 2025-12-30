/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let output = 0;

  function checkMagic(cRow, cCol) {
    if (cRow + 2 >= rows || cCol + 2 >= cols) {
      return;
    }

    let currGrid = grid
      .slice(cRow, cRow + 3)
      .map((eachRow) => eachRow.slice(cCol, cCol + 3));

    const checkArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < currGrid.length; i++) {
      for (let j = 0; j < currGrid[0].length; j++) {
        if (checkArr.indexOf(currGrid[i][j]) >= 0) {
          checkArr.splice(checkArr.indexOf(currGrid[i][j]), 1);
        }
      }
    }

    let isDiagSum15 = false;
    let isRowsSum15 = false;
    let isColsSum15 = false;

    if (
      currGrid[0][0] + currGrid[1][1] + currGrid[2][2] !== 15 ||
      currGrid[0][2] + currGrid[1][1] + currGrid[2][0] !== 15
    )
      return;

    for (let i = 0; i < 3; i++) {
      if (currGrid[i][0] + currGrid[i][1] + currGrid[i][2] !== 15) return;
    }

    // Columns
    for (let j = 0; j < 3; j++) {
      if (currGrid[0][j] + currGrid[1][j] + currGrid[2][j] !== 15) return;
    }

    if (checkArr.length) return;

    output++;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      checkMagic(i, j);
    }
  }

  return output;
};
