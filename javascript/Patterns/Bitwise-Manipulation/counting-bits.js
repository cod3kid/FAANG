/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  return Array(n + 1)
    .fill(0)
    .map((_, idx) => idx.toString(2).replace(/0/g, "").length);
};
