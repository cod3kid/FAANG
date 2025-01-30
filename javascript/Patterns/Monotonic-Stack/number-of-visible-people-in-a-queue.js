/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  let stack = [];
  let results = Array(heights.length).fill(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack.at(-1)] < heights[i]) {
      let idx = stack.pop();
      results[idx] += 1;
    }

    if (stack.length) {
      results[stack.at(-1)] += 1;
    }

    stack.push(i);
  }

  return results;
};
