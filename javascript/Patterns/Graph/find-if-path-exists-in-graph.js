/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  let adjacencyList = {};

  for (let [src, dest] of edges) {
    if (adjacencyList[src]) {
      adjacencyList[src].push(dest);
    } else {
      adjacencyList[src] = [dest];
    }

    if (adjacencyList[dest]) {
      adjacencyList[dest].push(src);
    } else {
      adjacencyList[dest] = [src];
    }
  }

  let stack = [];
  let visited = {};

  stack.push(source);
  visited[source] = true;
  while (stack.length) {
    let current = stack.pop();

    if (current === destination) return true;

    adjacencyList[current].forEach((neighbor) => {
      if (!visited[neighbor]) {
        stack.push(neighbor);
        visited[neighbor] = true;
      }
    });
  }

  return false;
};
