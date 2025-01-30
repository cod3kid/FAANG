/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  const MOD = 1e9 + 7;
  let stack = [];
  let prevSmaller = Array(arr.length).fill(-1);
  let nextSmaller = Array(arr.length).fill(arr.length);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack.at(-1)] >= arr[i]) {
      let idx = stack.pop();
      nextSmaller[idx] = i;
    }

    stack.push(i);
  }

  stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack.at(-1)] >= arr[i]) {
      stack.pop();
    }

    if (stack.length) {
      prevSmaller[i] = stack.at(-1);
    }

    stack.push(i);
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let leftCount = i - prevSmaller[i];
    let rightCount = nextSmaller[i] - i;
    result = (result + arr[i] * leftCount * rightCount) % MOD;
  }

  return result;
};
