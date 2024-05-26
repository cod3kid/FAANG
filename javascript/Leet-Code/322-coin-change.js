//Leetcode 322
// Dynamic Programming

function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }

  return dp[amount] != amount + 1 ? dp[amount] : -1;
}

coins = [1, 2, 5];
amount = 11;
console.log(coinChange(coins, amount));
