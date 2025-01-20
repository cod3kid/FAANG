/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let map = {};
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    let key = JSON.stringify(grid[i]);
    map[key] = (map[key] || 0) + 1;
  }

  for (let i = 0; i < grid[0].length; i++) {
    let key = JSON.stringify(grid.map((row) => row[i]));
    if (map[key]) {
      count += map[key];
    }
  }

  return count;
};
