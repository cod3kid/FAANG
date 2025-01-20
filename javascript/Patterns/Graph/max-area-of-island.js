/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        count = Math.max(count, dfs(grid, i, j, 0));
      }
    }
  }

  return count;
};

const dfs = (grid, i, j, count) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] != 1
  )
    return count;

  count++;
  grid[i][j] = "0";

  count = dfs(grid, i + 1, j, count);
  count = dfs(grid, i - 1, j, count);
  count = dfs(grid, i, j + 1, count);
  count = dfs(grid, i, j - 1, count);

  return count;
};
