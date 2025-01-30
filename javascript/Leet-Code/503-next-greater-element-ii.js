/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let stack = [];
  let result = Array(nums.length).fill(-1);
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < nums.length; i++) {
      while (stack.length && nums[stack.at(-1)] < nums[i]) {
        let idx = stack.pop();
        result[idx] = nums[i];
      }
      stack.push(i);
    }
  }

  return result;
};
