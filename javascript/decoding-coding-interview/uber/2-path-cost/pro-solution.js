//This method calculates the amount of water trapped. The only argument
//passed is the elevation map, in form of a array.

function pathCost(elevationMap) {
  var water = 0; //keeps track of the total water as we traverse the elevation map

  var n = elevationMap.length; //number of points on the map

  //arrays to store the left_max and right_max of each point in the map

  var leftMax = new Array(n).fill(0);
  var rightMax = new Array(n).fill(0);

  //default values
  leftMax[0] = elevationMap[0];
  rightMax[n - 1] = elevationMap[n - 1];

  //filling the left_max array
  for (var i = 1; i < n; i++)
    leftMax[i] = Math.max(leftMax[i - 1], elevationMap[i]);

  //filling the right_max array
  for (var i = n - 2; i >= 0; i--)
    rightMax[i] = Math.max(rightMax[i + 1], elevationMap[i]);

  //calculating the amount of water
  for (var i = 0; i < n; i++)
    water += Math.min(leftMax[i], rightMax[i]) - elevationMap[i];

  return water;
}

// Driver code
var elevationMap = [1, 2, 1, 3, 1, 2, 1, 4, 1, 0, 0, 2, 1, 4];
console.log("Accumulated water:", pathCost(elevationMap) + "cm");
