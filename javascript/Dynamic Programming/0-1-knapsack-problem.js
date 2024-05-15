const findMaxKnapsackProfit = (capacity, weights, values) => {
  let dp = Array.from({ length: weights.length + 1 }, () =>
    Array(capacity + 1).fill(0)
  );

  for (let i = 1; i <= weights.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp.at(-1).at(-1);
};

const capacity = 6;
const weights = [1, 2, 3, 5];
const values = [1, 5, 4, 8];

console.log(findMaxKnapsackProfit(capacity, weights, values));
