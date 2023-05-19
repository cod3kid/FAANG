def mergeOverlappingIntervals(intervals):
    mergeArr = []
    for i in range(len(intervals)):
        currInterval = []
        for j in range(len(intervals[i])):
            currInterval.append(intervals[i][j])
            if j == len(intervals[i]) and intervals[i][j] > intervals[i+1][0]:
                currInterval.pop()

            if j == 0 and i!=0 and intervals[i][j] < intervals[i-1][1]:
                currInterval.pop()

        mergeArr.append(currInterval)
    return mergeArr

intervals = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10]
]
print(mergeOverlappingIntervals(intervals))