function twoCityScheduling(costs) {
  let totalCost = 0;

  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));

  let costLength = costs.length;

  for (let i = 0; i < Math.floor(costLength / 2); i++) {
    totalCost += costs[i][0] + costs[costLength - i - 1][1];
  }

  return totalCost;
}

let costs = [
  [10, 100],
  [10, 1000],
  [50, 500],
  [1, 100],
];

console.log(twoCityScheduling(costs));

// Refer Educative for explanation
