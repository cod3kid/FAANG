/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let adjacencyList = {};

  for (let [src, dest] of tickets) {
    if (!adjacencyList[src]) {
      adjacencyList[src] = [];
    }

    adjacencyList[src].push(dest);
  }

  for (const destinations in adjacencyList) {
    adjacencyList[destinations].sort().reverse();
  }

  let result = [];

  const dfs = (current) => {
    let destinations = adjacencyList[current];

    while (destinations && destinations.length) {
      let nextDest = destinations.pop();
      dfs(nextDest);
    }

    result.push(current);
  };

  dfs("JFK");

  return result.reverse();
};

let tickets = [
  ["JFK", "SFO"],
  ["JFK", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "JFK"],
  ["ATL", "SFO"],
];

console.log(findItinerary(tickets));
// DFS Recursive
