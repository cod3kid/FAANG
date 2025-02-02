/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let dp = {};
  dp[s.length] = 1;

  const dfs = (idx) => {
    if (dp[idx]) {
      return dp[idx];
    }

    if (s[idx] === "0") {
      return 0;
    }

    let result = dfs(idx + 1);

    if (idx + 1 < s.length && parseInt(s.slice(idx, idx + 2)) <= 26) {
      result += dfs(idx + 2);
    }

    dp[idx] = result;
    return result;
  };

  return dfs(0);
};
