/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let result = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      let idx = stack.pop();
      result[idx] = i - idx;
    }

    stack.push(i);
  }
  return result;
};
