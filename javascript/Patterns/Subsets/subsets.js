/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const getBits = (num, bits) => {
  let temp = 1 << bits;
  temp = temp & num;

  if (temp === 0) return 0;

  return 1;
};
var subsets = function (nums) {
  let totalSubsets = 2 ** nums.length;
  let output = [];

  for (let i = 0; i < totalSubsets; i++) {
    let subset = new Set();

    for (let j = 0; j < nums.length; j++) {
      if (getBits(i, j) == 1 && !subset.has(nums[j])) {
        subset.add(nums[j]);
      }
    }

    if (i == 0) {
      output.push([]);
    } else {
      output.push(Array.from(subset));
    }
  }

  return output;
};
