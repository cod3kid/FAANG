const validTree = (n, edges) => {
  if (edges.length !== n - 1) return false;

  if (!edges.length && n === 1) return true;

  let adjacencyList = {};
  for (let [source, dest] of edges) {
    if (!adjacencyList[source]) {
      adjacencyList[source] = [dest];
    } else {
      adjacencyList[source].push(dest);
    }

    if (!adjacencyList[dest]) {
      adjacencyList[dest] = [source];
    } else {
      adjacencyList[dest].push(source);
    }
  }

  let stack = [];
  let visited = {};

  stack.push(0);
  visited[0] = true;

  while (stack.length) {
    let current = stack.pop();

    adjacencyList[current].forEach((child) => {
      if (!visited[child]) {
        stack.push(child);
        visited[child] = true;
      }
    });
  }

  return Object.entries(visited).length === n;
};

let n = 5;
let edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [3, 4],
];
console.log(validTree(n, edges));

// A graph is a valid tree when all the nodes are connected and there is no cycle between them.
