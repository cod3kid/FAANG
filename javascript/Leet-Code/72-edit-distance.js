/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a DP table where dp[i][j] represents the minimum number of operations
  // to convert word1[0...i-1] to word2[0...j-1]
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Initialize the table for base cases
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // Converting word1[0...i-1] to an empty string (delete all characters)
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // Converting an empty string to word2[0...j-1] (insert all characters)
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // No operation needed if characters are the same
      } else {
        dp[i][j] =
          Math.min(
            dp[i - 1][j], // Delete operation
            dp[i][j - 1], // Insert operation
            dp[i - 1][j - 1] // Replace operation
          ) + 1;
      }
    }
  }

  return dp[m][n];
};

// Levenstein Distance
