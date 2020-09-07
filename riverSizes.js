grid = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
]

function riverSizes(grid) {
    countArr = []
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            count = 0
            if (grid[i][j] == 1) {
                count = bfs(grid, i, j, count)
                countArr.push(count)
            }
        }
    }
    return countArr
}


function bfs(grid, i, j, count) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0) {
        return count
    }


    count++
    grid[i][j] = 0
    count = bfs(grid, i + 1, j, count)
    count = bfs(grid, i - 1, j, count)
    count = bfs(grid, i, j - 1, count)
    count = bfs(grid, i, j + 1, count)

    return count
}


console.log(riverSizes(grid))