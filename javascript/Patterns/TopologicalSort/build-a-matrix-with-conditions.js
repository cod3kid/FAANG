/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  let rowAdjacencyList = {};
  let colAdjacencyList = {};
  let rowInDegreeList = {};
  let colInDegreeList = {};

  for (let i = 1; i <= k; i++) {
    rowAdjacencyList[i] = [];
    colAdjacencyList[i] = [];

    rowInDegreeList[i] = 0;
    colInDegreeList[i] = 0;
  }

  for (let condition of rowConditions) {
    let dest = condition[0];
    let src = condition[1];

    rowAdjacencyList[dest].push(src);
    rowInDegreeList[src] += 1;
  }

  for (let condition of colConditions) {
    let dest = condition[0];
    let src = condition[1];

    colAdjacencyList[dest].push(src);
    colInDegreeList[src] += 1;
  }

  let rowQueue = [];
  let rowOrder = [];

  let colQueue = [];
  let colOrder = [];

  Object.entries(rowInDegreeList).forEach(([node, count]) => {
    if (count === 0) {
      rowQueue.push(node);
    }
  });

  while (rowQueue.length) {
    let node = rowQueue.shift();
    rowOrder.push(node);

    rowAdjacencyList[node].forEach((neighbor) => {
      rowInDegreeList[neighbor] -= 1;
      if (rowInDegreeList[neighbor] === 0) {
        rowQueue.push(neighbor);
      }
    });
  }

  Object.entries(colInDegreeList).forEach(([node, count]) => {
    if (count === 0) {
      colQueue.push(node);
    }
  });

  while (colQueue.length) {
    let node = colQueue.shift();
    colOrder.push(node);

    colAdjacencyList[node].forEach((neighbor) => {
      colInDegreeList[neighbor] -= 1;
      if (colInDegreeList[neighbor] === 0) {
        colQueue.push(neighbor);
      }
    });
  }

  if (rowOrder.length !== Object.keys(rowInDegreeList).length) return [];
  if (colOrder.length !== Object.keys(colInDegreeList).length) return [];

  let posRow = {};
  let posCol = {};
  let matrix = Array(k)
    .fill(0)
    .map(() => Array(k).fill(0));

  rowOrder.forEach((num, idx) => (posRow[num] = idx));
  colOrder.forEach((num, idx) => (posCol[num] = idx));

  for (let i = 1; i <= k; i++) {
    if (posRow.hasOwnProperty(i) && posCol.hasOwnProperty(i)) {
      matrix[posRow[i]][posCol[i]] = i;
    }
  }

  return matrix;
};
