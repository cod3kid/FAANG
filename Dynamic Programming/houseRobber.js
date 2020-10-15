//LeetCode 198 Easy
//Dynamic Programming
function housesToRob(houses) {

    dp = []
    dp[0] = 0
    dp[1] = houses[0]

    for (let i = 1; i < houses.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + houses[i])
    }

    return dp[houses.length]
}

houses = [1, 2, 3, 1]
console.log(housesToRob(houses))
