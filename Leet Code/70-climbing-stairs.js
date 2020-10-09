//Leetcode 70
//Dynamic Programming . This is an application of fibonacci series

function climbingStairs(n) {

    dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }

    return dp[n]

}


console.log(climbingStairs(5))