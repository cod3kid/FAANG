/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [];
  let nextSmaller = Array(heights.length).fill(heights.length);
  let prevSmaller = Array(heights.length).fill(-1);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack.at(-1)]) {
      let idx = stack.pop();
      nextSmaller[idx] = i;
    }

    if (stack.length) {
      prevSmaller[i] = stack.at(-1);
    }

    stack.push(i);
  }

  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let currentHeight = heights[i];
    let width = nextSmaller[i] - prevSmaller[i] - 1;
    maxArea = Math.max(maxArea, currentHeight * width);
  }

  return maxArea;
};
