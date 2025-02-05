/**
 *
 * Do logical AND operation of n and n-1 until n is 0,
 * during each iteration increment the count
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    n = n & (n - 1);
    count += 1;
  }

  return count;
};
