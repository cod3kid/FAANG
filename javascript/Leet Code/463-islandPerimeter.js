function islandPerimeter(grid) {
    let result = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                result += 4
                if (i > 0 && grid[i - 1][j] == 1) {
                    result -= 2
                }
                if (j > 0 && grid[i][j - 1] == 1) {
                    result -= 2
                }
            }
        }

    }
    return result

}
grid = [
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]
console.log(islandPerimeter(grid))