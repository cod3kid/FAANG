const minOperationsToK = (k) => {
  let dp = Array(k + 1).fill(0);

  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[Math.floor(i / 2)] + 1;
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }

  return dp[k];
};

const n = 11;
console.log(minOperationsToK(n));
