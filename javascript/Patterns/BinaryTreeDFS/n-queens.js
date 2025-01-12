/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = [];
  let cols = {};
  let posDiag = {};
  let negDiag = {};

  let board = Array.from({ length: n }, () => Array(n).fill("."));

  const backtrack = (r) => {
    if (r === n) {
      result.push(board.map((arr) => arr.join("")));
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols[c] || posDiag[r - c] || negDiag[r + c]) continue;

      board[r][c] = "Q";
      cols[c] = true;
      posDiag[r - c] = true;
      negDiag[r + c] = true;

      backtrack(r + 1);

      board[r][c] = ".";
      cols[c] = false;
      posDiag[r - c] = false;
      negDiag[r + c] = false;
    }
  };

  backtrack(0);
  return result;
};
