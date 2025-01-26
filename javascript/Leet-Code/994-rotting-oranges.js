const orangesRotting = (grid) => {
  const queue = [];
  let freshOranges = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshOranges++;
      }
    }
  }

  if (freshOranges === 0) return 0;

  let count = -1;
  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    let size = queue.length;
    count++;
    for (let i = 0; i < size; i++) {
      let [row, col] = queue.shift();
      for (let [dx, dy] of directions) {
        let nx = row + dx;
        let ny = col + dy;

        if (
          nx >= 0 &&
          nx < grid.length &&
          ny >= 0 &&
          ny < grid[0].length &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          queue.push([nx, ny]);
          freshOranges--;
        }
      }
    }
  }

  if (freshOranges === 0) return count;

  return -1;
};
