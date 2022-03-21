function isMountainArray(arr) {
  isPeakFound = false;
  if (arr.length < 3) return false;

  for (i = 0; i < arr.length; i++) {
    // For leveling [3,5,5,1,1]
    if (arr[i] == arr[i + 1]) return false;

    // For increasing after finding peak
    if (isPeakFound && arr[i] < arr[i + 1]) return false;

    // For finding peak
    if (arr[i] > arr[i + 1]) isPeakFound = true;

    // For decreasing from the start [9,8,7,6,5,4,3,2,1,0]
    if (i == 0 && isPeakFound) return false;

    // For increasing from the start [0,1,2,3,4,5,6,7,8,9]
    if (i + 1 == arr.length && !isPeakFound) return false;
  }
  return true;
}

arr = [0, 1, 2, 4, 2, 1];
console.log(isMountainArray(arr));
