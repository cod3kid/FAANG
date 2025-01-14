/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return Math.max(robHelper(nums.slice(0, -1)), robHelper(nums.slice(1)));
};

var robHelper = function (nums) {
  let dp = Array(nums.length + 1);
  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }

  return dp.at(-1);
};
