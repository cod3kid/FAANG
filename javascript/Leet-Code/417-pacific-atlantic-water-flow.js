/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || heights.length === 0 || heights[0].length === 0) {
    return [];
  }

  let rows = heights.length;
  let cols = heights[0].length;
  let pac = new Set();
  let atl = new Set();

  const dfs = (r, c, visit, prevHeight) => {
    const key = `${r},${c}`;
    if (
      visit.has(key) ||
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    visit.add(key);

    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  };

  // Run DFS for Pacific (top and left edges)
  for (let i = 0; i < cols; i++) {
    dfs(0, i, pac, heights[0][i]); // Top edge
    dfs(rows - 1, i, atl, heights[rows - 1][i]); // Bottom edge
  }
  for (let i = 0; i < rows; i++) {
    dfs(i, 0, pac, heights[i][0]); // Left edge
    dfs(i, cols - 1, atl, heights[i][cols - 1]); // Right edge
  }

  return [...pac]
    .filter((item) => atl.has(item))
    .map((item) => item.split(",").map(Number));
};
