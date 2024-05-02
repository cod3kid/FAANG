function mergeIntervals(intervals) {
  // Replace this placeholder return statement with your code
  let result = [];

  result.push(intervals[0]);

  intervals.forEach((interval, index) => {
    if (index === 0) return;

    const previouslyAddedInterval = result.at(-1)[0];

    if (
      interval[0] >= previouslyAddedInterval &&
      interval[0] <= previouslyAddedInterval &&
      interval[1] >= previouslyAddedInterval &&
      interval[1] <= previouslyAddedInterval
    )
      return;

    if (
      interval[0] >= previouslyAddedInterval &&
      interval[0] <= previouslyAddedInterval &&
      interval[1] >= previouslyAddedInterval
    ) {
      result[result.length - 1] = [previouslyAddedInterval[0], interval[1]];
      return;
    }

    if (
      interval[0] <= previouslyAddedInterval &&
      interval[1] >= previouslyAddedInterval &&
      interval[1] <= previouslyAddedInterval
    ) {
      result[result.length - 1] = [interval[0], previouslyAddedInterval[1]];
      return;
    }

    result.push([interval[0], interval[1]]);
  });
  return result;
}

console.log(
  mergeIntervals([
    [1, 5],
    [3, 7],
    [4, 6],
    [15, 20],
  ])
);
