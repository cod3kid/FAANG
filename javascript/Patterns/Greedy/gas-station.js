const canCompleteCircuit = (gas, cost) => {
  const totalGas = gas.reduce((acc, curr) => acc + curr, 0);
  const totalCost = cost.reduce((acc, curr) => acc + curr, 0);

  if (totalCost > totalGas) return -1;
  let startingIndex = 0;
  let currentGas = 0;

  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];
    if (currentGas < 0) {
      currentGas = 0;
      startingIndex = i + 1;
    }
  }

  return startingIndex;
};

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
