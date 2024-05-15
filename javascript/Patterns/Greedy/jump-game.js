const jumpGame = (nums) => {
  let maxJumpIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxJumpIndex) return false;

    maxJumpIndex = Math.max(maxJumpIndex, nums[i] + i);
  }

  return true;
};

arr = [2, 3, 1, 1, 4];
console.log(jumpGame(arr));

// TC: 0(n)  SC: O(1)
// If there are no 0, we'll always be able to reach the end
// If there are 0, and if we cross it, we'll reach the end
