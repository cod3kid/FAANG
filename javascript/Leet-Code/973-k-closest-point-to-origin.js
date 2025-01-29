/**
Use Heap instead of Sorting the Distances Array
*/
var kClosest = function (points, k) {
  let distances = [];
  for (let idx in points) {
    distances.push({
      distance: Math.abs(
        Math.sqrt(
          points[idx][1] * points[idx][1] + points[idx][0] * points[idx][0]
        )
      ),
      idx,
    });
  }

  distances.sort((a, b) => a.distance - b.distance);

  return distances.slice(0, k).map((i) => points[i.idx]);
};
