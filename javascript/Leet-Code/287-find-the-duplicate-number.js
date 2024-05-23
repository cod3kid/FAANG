const findDuplicate = (nums) => {
  let slowPtr = nums[0];
  let fastPtr = nums[0];

  while (true) {
    slowPtr = nums[slowPtr];
    fastPtr = nums[nums[fastPtr]];

    if (slowPtr === fastPtr) break;
  }

  slowPtr = nums[0];

  while (fastPtr != slowPtr) {
    slowPtr = nums[slowPtr];
    fastPtr = nums[fastPtr];

    if (slowPtr === fastPtr) break;
  }

  return fastPtr;
};

// Use Fast and Slow Pointers in the first iteration and break free from the loop when they're same
// In the second iteration, move both of these pointers in the same speed but, slow will start from 0 and fast will be previous fast
// Finally return fast
