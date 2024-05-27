/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  return factors[k - 1] ?? -1;
};
