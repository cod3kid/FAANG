const isMountainArray = (arr) => {
  isPeakFound = false;

  if (arr.length < 3) {
    return false;
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return false;

    if (isPeakFound && arr[i] > arr[i + 1]) {
      return false;
    }
    if (arr[i] < arr[i - 1]) {
      isPeakFound = true;
    }
  }

  return true;
};

num = [0, 1, 2, 3, 4, 5, 2, 1];
console.log(isMountainArray(num));
