/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  let result = [];
  let ptr = 0;

  if (original.length !== m * n) return [];

  for (let i = 0; i < m; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(original[ptr]);
      ptr++;
    }
    result.push(temp);
  }

  return result;
};
