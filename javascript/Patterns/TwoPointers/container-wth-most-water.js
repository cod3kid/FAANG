/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(currentArea, maxArea);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxArea;
};
