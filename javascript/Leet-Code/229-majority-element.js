/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = {};
  let n = Math.floor(nums.length / 3);

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  return Object.entries(map)
    .filter((item) => item[1] > n)
    .map((item) => parseInt(item[0]));
};
