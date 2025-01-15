/**
 * @param {number} n
 * @return {number}
 */

var numTrees = function (n) {
  let catalan = 1;
  for (let i = 0; i < n; i++) {
    catalan = (catalan * (2 * (2 * i + 1))) / (i + 2);
  }
  return catalan;
};

/*

Uses the Catalan formula in Combinatrics

C(n+1) = C(n) * (2 * (2n + 1)) / (n + 2)
*/
