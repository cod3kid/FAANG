// DFS Backtracking Easy BruteForce Soln
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let current = [];

  const backtrack = () => {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!current.includes(nums[i])) {
        current.push(nums[i]);
        backtrack();
        current.pop();
      }
    }
  };

  backtrack();
  return result;
};
