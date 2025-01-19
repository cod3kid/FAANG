/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let avg = -Infinity;
  let sum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
  for (let i = 0; i <= nums.length - k; i++) {
    let r = i + k;
    newAvg = (sum / k).toFixed(5);
    sum -= nums[i];
    sum += nums[r];
    avg = Math.max(avg, newAvg);
  }

  return avg;
};
