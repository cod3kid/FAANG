function findCompilationOrder(dependencies) {
  let sortedOrder = [];
  let graph = {};
  let inDegree = {};

  dependencies.forEach((x) => {
    let parent = x[1];
    let child = x[0];
    graph[parent] = [];
    graph[child] = [];
    inDegree[parent] = 0;
    inDegree[child] = 0;
  });

  if (graph.length <= 0) {
    return sortedOrder;
  }

  dependencies.forEach((dependency) => {
    let parent = dependency[1];
    let child = dependency[0];
    graph[parent].push(child);
    inDegree[child] += 1;
  });

  let sources = [];

  Object.keys(inDegree).forEach((key) => {
    if (inDegree[key] == 0) {
      sources.push(key);
    }
  });

  while (sources.length != 0) {
    let vertex = sources.shift();
    sortedOrder.push(vertex);

    graph[vertex].forEach((child) => {
      inDegree[child] -= 1;
      if (inDegree[child] == 0) {
        sources.push(child);
      }
    });
  }

  if (sortedOrder.length != Object.keys(graph).length) {
    return [];
  }
  return sortedOrder;
}

let dependencies = [
  ["B", "A"],
  ["C", "A"],
  ["D", "C"],
  ["E", "D"],
  ["E", "B"],
];

console.log(findCompilationOrder(dependencies));
