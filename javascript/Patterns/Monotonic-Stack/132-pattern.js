/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let stack = [];
  let minimums = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    // Build the minimums array
    if (i !== 0) {
      // If current is less than prev, current's minimum is current itself (We store indexes for more flexibility)
      if (nums[i] < nums[minimums[i - 1]]) {
        minimums[i] = i;
      } else {
        minimums[i] = minimums[i - 1];
      }
    }

    while (stack.length && nums[i] >= nums[stack.at(-1)]) {
      stack.pop();
    }

    if (stack.length && nums[i] > nums[minimums[stack.at(-1)]]) {
      return true;
    }
    stack.push(i);
  }
  return false;
};
