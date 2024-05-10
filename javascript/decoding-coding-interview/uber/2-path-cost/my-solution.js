const elevations = [1, 2, 1, 3, 1, 2, 1, 4, 1, 0, 0, 2, 1, 4];

let totalWater = 0;
const n = elevations.length;

const leftMax = new Array(n).fill(0);
const rightMax = new Array(n).fill(0);

leftMax[0] = elevations[0];
rightMax[n - 1] = elevations[n - 1];

for (let i = 1; i < n; i++) {
  leftMax[i] = Math.max(...elevations.slice(0, i + 1));
}

for (let i = n - 2; i >= 0; i--) {
  rightMax[i] = Math.max(...elevations.slice(0, i + 1));
}

for (let i = 0; i < n; i++) {
  totalWater += Math.min(leftMax[i], rightMax[i]) - elevations[i];
}

console.log(totalWater);

/*   Time Complexity is O(n^2)
     We can improve this by using a bit of Dynamic Programming to calculate the leftMax and rightMax
     Instead of leftMax[i] = Math.max(...elevations.slice(0, i + 1));
     Use leftMax[i] = Math.max(left[i-1],elevations[i])
*/
