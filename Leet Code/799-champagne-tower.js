function champagneTower() {
    dp = []
    for (let i = 0; i < query_row + 1; i++) {
        dp.push([])
        for (let j = 0; j < i; j++) {
            dp[i].push(0)
        }
    }

    return dp
}

poured = 1, query_row = 10, query_glass = 1
console.log(champagneTower(poured, query_row, query_glass))