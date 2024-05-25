function intervalsIntersection(intervalListA, intervalListB) {
  let i = 0,
    j = 0,
    intersections = [];

  while (i < intervalListA.length && j < intervalListB.length) {
    let start = Math.max(intervalListA[i][0], intervalListB[j][0]);
    let end = Math.min(intervalListA[i][1], intervalListB[j][1]);

    if (start <= end) {
      intersections.push([start, end]);
    }

    if (intervalListA[i][1] < intervalListB[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return intersections;
}

let firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
let secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];

console.log(intervalsIntersection(firstList, secondList));

/*
Set two pointers, i and j, at the beginning of both lists, respectively, for their iteration.

While iterating, find the latest starting time and the earliest ending time for each pair of intervals intervalListA[i] and intervalListB[j] .

If the latest starting time is less than or equal to the earliest ending time, store it as an intersection.

Increment the pointer (i or j) of the list having the smaller end time of the current interval.

Keep iterating until either list is fully traversed.

Return the list of intersections.
*/
