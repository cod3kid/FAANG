/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let count = 0;
  let visited = {};

  const dfs = (node) => {
    for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
      if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
        visited[neighbor] = true;
        dfs(neighbor);
      }
    }
  };

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      count++;
      visited[i] = true;
      dfs(i);
    }
  }

  return count;
};
