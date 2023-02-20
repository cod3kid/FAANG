const noOfIslands = (grid) => {
  let countArr = [];

  for (let i = 0; i <= grid.length - 1; i++) {
    for (let j = 0; j <= grid[0].length - 1; j++) {
      let count = 0;
      if (grid[i][j] === 1) {
        count = bfs(grid, i, j, count);
        countArr.push(count);
      }
    }
  }

  return countArr;
};

const bfs = (grid, i, j, count) => {
  if (
    i < 0 ||
    i > grid.length - 1 ||
    j < 0 ||
    j > grid[0].length - 1 ||
    grid[i][j] === 0
  ) {
    return count;
  }

  count++;
  grid[i][j] = 0;
  count = bfs(grid, i + 1, j, count);
  count = bfs(grid, i - 1, j, count);
  count = bfs(grid, i, j + 1, count);
  count = bfs(grid, i, j - 1, count);

  return count;
};

grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

console.log(noOfIslands(grid));
