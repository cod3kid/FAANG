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

var subsets2 = function (nums) {
  let result = [];

  const backtrack = (i, sol) => {
    if (i === nums.length) {
      // We simply need the copy
      result.push([...sol]);
      return;
    }

    // Not picking nums[i]
    backtrack(i + 1, sol);

    // Picking nums[i]
    sol.push(nums[i]);
    backtrack(i + 1, sol);
    sol.pop();
  };

  backtrack(0, []);

  return result;
};

/* 

   Soln from Greg Hogg
   https://www.youtube.com/watch?v=UP3dOYJa05s
   
*/
