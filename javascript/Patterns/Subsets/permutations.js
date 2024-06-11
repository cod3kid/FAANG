/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const swapStr = (numsu, idx1, idx2) => {
  let nums = structuredClone(numsu);
  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;

  return nums;
};

function permuteComb(nums, currentIdx, result) {
  if (currentIdx === nums.length - 1) {
    result.push(nums);
    return;
  }

  for (let i = currentIdx; i < nums.length; i++) {
    let swappedStr = swapStr(nums, currentIdx, i);
    permuteComb(swappedStr, currentIdx + 1, result);
  }
}

var permute = function (nums) {
  let result = [];
  permuteComb(nums, 0, result);

  return result;
};
