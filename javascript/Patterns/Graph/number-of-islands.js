/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        count++;
        bfs(grid, i, j);
      }
    }
  }

  return count;
};

const bfs = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] != 1
  )
    return;

  grid[i][j] = "0";

  bfs(grid, i + 1, j);
  bfs(grid, i - 1, j);
  bfs(grid, i, j + 1);
  bfs(grid, i, j - 1);

  return;
};
