/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
  if (depth == 0) return arr;

  let result = [];

  for (let el of arr) {
    if (typeof el !== "number") {
      result.push(...flat(el, depth - 1));
    } else {
      result.push(el);
    }
  }

  return result;
};
