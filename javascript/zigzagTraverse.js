const zigzagTraverse = (arr) => {
  let row = 0;
  let col = 0;
  const maxRow = arr.length - 1;
  const maxCol = arr[0].length - 1;
  let direction = "down";
  const output = [];
  while (!outOfBound(row, col, maxRow, maxCol)) {
    output.push(arr[row][col]);
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

  return output;
};

const outOfBound = (row, col, maxRow, maxCol) => {
  return row < 0 || col < 0 || row > maxRow || col > maxCol;
};
arr = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16],
];
console.log(zigzagTraverse(arr));
