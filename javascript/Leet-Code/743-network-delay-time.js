/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let adjacencyList = {};
  let pq = [];

  const enqueue = (node, time) => {
    pq.push({ node, time });
    pq.sort((a, b) => a.time - b.time);
  };

  for (let [src, dest, time] of times) {
    if (!adjacencyList[src]) {
      adjacencyList[src] = [];
    }
    adjacencyList[src].push({ node: dest, time });
  }

  let delayTime = 0;
  let visited = {};

  enqueue(k, 0);

  while (pq.length) {
    let smallest = pq.shift();

    if (visited[smallest.node]) continue;

    visited[smallest.node] = true;
    delayTime = Math.max(delayTime, smallest.time);

    for (let i in adjacencyList[smallest.node]) {
      let neighbor = adjacencyList[smallest.node][i];

      if (!visited[neighbor.node]) {
        let newTime = smallest.time + neighbor.time;
        enqueue(neighbor.node, newTime);
      }
    }
  }

  return Object.entries(visited).length === n ? delayTime : -1;
};

let n = 4;
let k = 2;
let times = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];

console.log(networkDelayTime(times, n, k));
// Dijiktra's
