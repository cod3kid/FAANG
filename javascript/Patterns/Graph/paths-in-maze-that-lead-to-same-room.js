const numberOfPaths = (n, corridors) => {
  let adjacencyList = {};
  let cycles = 0;

  for (let [room1, room2] of corridors) {
    if (!adjacencyList[room1]) {
      adjacencyList[room1] = [];
    }

    if (!adjacencyList[room2]) {
      adjacencyList[room2] = [];
    }

    adjacencyList[room1].push(room2);
    adjacencyList[room2].push(room1);

    const intersection = adjacencyList[room1].filter((r2) =>
      adjacencyList[room2].includes(r2)
    );
    cycles += intersection.length;
  }

  return cycles;
};

let n = 5;
let corridors = [
  [1, 2],
  [5, 2],
  [4, 1],
  [2, 4],
  [3, 1],
  [3, 4],
];
console.log(numberOfPaths(n, corridors));

// Find the intersection to solve it easily
// Or use DFS
