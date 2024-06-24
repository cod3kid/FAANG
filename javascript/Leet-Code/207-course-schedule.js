/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (n, prerequisites) {
  let adjacencyList = {};
  let inDegreesCount = {};

  for (let i = 0; i < n; i++) {
    adjacencyList[i] = [];
    inDegreesCount[i] = 0;
  }

  for (let prerequisite of prerequisites) {
    let parent = prerequisite[1];
    let child = prerequisite[0];
    adjacencyList[parent].push(child);
    inDegreesCount[child] += 1;
  }

  let queue = [];
  let order = [];

  Object.entries(inDegreesCount).forEach((item) => {
    if (item[1] === 0) {
      queue.push(parseInt(item[0]));
    }
  });

  while (queue.length) {
    let node = queue.shift();
    order.push(node);

    adjacencyList[node].forEach((neighbor) => {
      inDegreesCount[neighbor] -= 1;
      if (inDegreesCount[neighbor] === 0) {
        queue.push(neighbor);
      }
    });
  }

  return order.length === n;
};
