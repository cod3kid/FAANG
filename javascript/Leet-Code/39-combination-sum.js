/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  const dfs = (idx, current) => {
    let currentSum = current.reduce((acc, curr) => acc + curr, 0);
    if (currentSum === target) {
      result.push([...current]);
      return;
    }

    if (currentSum > target || idx >= candidates.length) return;

    dfs(idx + 1, current);

    current.push(candidates[idx]);
    dfs(idx, current);
    current.pop();
  };

  dfs(0, []);
  return result;
};

// Picking and Not Picking Approach
