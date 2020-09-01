grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]]
  
  function noOfIslands(grid) {
    count = 0
  
    for (i = 0; i < grid.length; i++) {
      for (j = 0; j < grid[i].length; j++) {
        if (grid[i][j] == 1) {
          count += 1
          bfs(grid, i, j)
        }
      }
    }
    return count
  }
  
  
  function bfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0)
      return
  
    grid[i][j] = 0
    bfs(grid, i + 1, j)
    bfs(grid, i - 1, j)
    bfs(grid, i, j - 1)
    bfs(grid, i, j + 1)
  
  }
  
  
  console.log(noOfIslands(grid))