function islandPerimeter(grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        result += 4;
        if (i > 0 && grid[i - 1][j] == 1) {
          result -= 2;
        }
        if (j > 0 && grid[i][j - 1] == 1) {
          result -= 2;
        }
      }
    }
  }
  return result;
}
grid = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(islandPerimeter(grid));

/**
  DFS Solution
   */
var islandPerimeter = function (grid) {
  let map = {};

  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] == 0
    )
      return 1;

    let key = `${i},${j}`;
    if (map[key]) return 0;

    map[key] = true;

    let perimeter = 0;
    perimeter += dfs(i + 1, j);
    perimeter += dfs(i - 1, j);
    perimeter += dfs(i, j + 1);
    perimeter += dfs(i, j - 1);

    return perimeter;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        return dfs(i, j);
      }
    }
  }
};
