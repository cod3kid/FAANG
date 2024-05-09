class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // used for max-heap
  lt(other) {
    return this.distanceFromUser() > other.distanceFromUser();
  }

  distanceFromUser() {
    // ignoring sqrt to calculate the distance
    return this.x * this.x + this.y * this.y;
  }

  printLocation() {
    console.log("[" + this.x + ", " + this.y + "] ", (end = ""));
  }
}

var findClosestDrivers = function (points, k) {
  let maxHeap = [];

  // now we need to try to add all points to the heap
  for (let i = 0; i < points.length; i++) {
    if (maxHeap.length >= k && distance(points[i]) > distance(maxHeap[0])) {
      // it's bigger than the max, we can just skip it
      continue;
    }
    add(maxHeap, points[i], distance);
    if (maxHeap.length > k) {
      remove(maxHeap, distance);
    }
  }
  return maxHeap;
};

result = findClosestDrivers(
  [new Location(1, 3), new Location(3, 4), new Location(2, -1)],
  2
);
console.log(
  "Here are the k drivers locations closest to the user in the Seattle area: ",
  (end = "")
);
for (var i = 0; i < result.length; i++) result[i].printLocation();
