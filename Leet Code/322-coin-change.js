//Leetcode 322
// Dynamic Programming

function coinChange(coins, amount) {

    dp = []
    for (let i = 0; i <= coins.length; i++) {
        dp[i] = amount + 1
    }
    console.log(dp)

    dp[0] = 0

    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
}


coins = [1, 2, 5]
amount = 11
console.log(coinChange(coins, amount))
