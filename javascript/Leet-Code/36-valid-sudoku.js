/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let squares = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let current = board[r][c];
      let key = `${Math.floor(r / 3)}|${Math.floor(c / 3)}`;
      if (current === ".") continue;

      if (
        rows[r].has(current) ||
        cols[c].has(current) ||
        squares[key]?.has(current)
      ) {
        return false;
      }

      rows[r].add(current);
      cols[c].add(current);

      if (!squares[key]) {
        squares[key] = new Set();
      }
      squares[key].add(current);
    }
  }
  return true;
};
