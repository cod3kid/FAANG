/**
 * XOR operation is associative, which means a^b^c is same as b^c^a, it doesn't matter
 * that if the numbers are ordered differently.
 *
 * a ^ 0 = a
 * a ^ a = 0
 *
 * By applying all these rules, the result XOR will be the non-duplicate answer
 */

var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result = result ^ num;
  }

  return result;
};
