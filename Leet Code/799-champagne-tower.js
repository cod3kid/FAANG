function champagneTower(poured, query_row, query_glass) {
    tower = []
    for (let i = 0; i < query_row; i++) {
        tower.push([])
    }
    tower[0][0] = poured

    for (let row = 0; row < query_row; row++) {
        let maxCol = Math.min(row, query_glass)
        for (let col = 0; col <= maxCol; col++) {
            if (tower[row][col] > 1) {
                double_spill = tower[row][col] - 1
                tower[row + 1][col] += double_spill / 2
                tower[row + 1][col + 1] += double_spill / 2
            }
        }
    }

    result = tower[query_row][query_glass] > 1 ? 1.0 : tower[query_row][query_glass]
    return result
}

poured = 1, query_row = 10, query_glass = 1
console.log(champagneTower(poured, query_row, query_glass))