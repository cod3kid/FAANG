grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
]

function noOfRottenOranges(grid) {
    const queue = []
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const numRows = grid.length;
    const numCols = grid[0].length;
    let fresh = 0
    let minute = 0

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] == 2) {

                queue.push([i, j])
            } else if (grid[i][j] === 1) {
                fresh++;
            }

        }
    }

    while (queue.length != 0 && fresh) {

        const qlen = queue.length
        for (let q = 0; q < qlen; q++) {
            const rotten = queue.shift()

            for (let i = 0; i < directions.length; i++) {
                const d = directions[i]
                const r = rotten[0] + d[0]
                const c = rotten[1] + d[1]

                if (r >= 0 && r < numRows && c >= 0 && c < numCols && grid[r][c] == 1) {
                    grid[r][c] = 2
                    fresh--
                    queue.push([r, c])
                }
            }
        }

        minute++
    }
    if (fresh > 0)
        return -1


    return minute
}




console.log(noOfRottenOranges(grid))