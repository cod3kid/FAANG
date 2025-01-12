/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function (n) {
  let result = 0;
  let cols = {};
  let posDiag = {};
  let negDiag = {};

  const backtrack = (r) => {
    if (r === n) {
      result += 1;
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols[c] || posDiag[r - c] || negDiag[r + c]) continue;

      cols[c] = true;
      posDiag[r - c] = true;
      negDiag[r + c] = true;

      backtrack(r + 1);

      cols[c] = false;
      posDiag[r - c] = false;
      negDiag[r + c] = false;
    }
  };

  backtrack(0);
  return result;
};
