/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = {};
  let set = new Set();

  for (let num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let key in map) {
    if (set.has(map[key])) return false;

    set.add(map[key]);
  }

  return true;
};
