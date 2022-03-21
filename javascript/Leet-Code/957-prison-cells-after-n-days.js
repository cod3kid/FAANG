function prisonCell(cells, N) {
    dict = {}
    for (let i = 0; i < N; i++) {
        cellsStr = cells.join('')
        if (dict.hasOwnProperty(cellsStr)) {
            length_loop = i - dict[cellsStr]
            return prisonCell(cells, (N - i) % length_loop)
        }
        else {
            dict[cellsStr] = i
            cells = nextDay(cells)
        }
    }
    return cells
}

function nextDay(cells) {
    newCell = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 1; i < newCell.length - 1; i++) {
        if (cells[i - 1] == cells[i + 1]) {
            newCell[i] = 1
        }
    }
    return newCell
}

cells = [1,0,0,1,0,0,1,0]
N = 1000000000

console.log(prisonCell(cells, N))