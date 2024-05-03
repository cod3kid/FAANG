function insertInterval(existingIntervals, newInterval) {
  let newStart = newInterval[0],
    newEnd = newInterval[1];

  //   let i = 0,
  //     n = existingIntervals.length;

  let output = [];

  existingIntervals.forEach((interval, index) => {
    if (newStart > interval[0]) {
      output.push(interval);
    }
  });

  if (!output.length || output.at(-1)[1] < newStart) {
    output.push(newInterval);
  } else {
    output[output.length - 1][1] = Math.max(output.at(-1)[1], newEnd);
  }

  let i = 0,
    n = existingIntervals.length;
  while (i < n) {
    let ei = existingIntervals[i];
    let start = ei[0],
      end = ei[1];

    if (output[output.length - 1][1] < start) output.push(ei);
    else
      output[output.length - 1][1] = Math.max(
        output[output.length - 1][1],
        end
      );
    i++;
  }
  return output;
}

const newInterval = [5, 7];
const existingInterval = [
  [1, 2],
  [3, 5],
  [6, 8],
];

console.log(insertInterval(existingInterval, newInterval));
