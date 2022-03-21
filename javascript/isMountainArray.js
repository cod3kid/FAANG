function isMountainArray(num) {
  isPeakFound = false;
  numLen = num.length;

  if (numLen < 3) {
    return false;
  }

  for (i = 1; i < num.length; i++) {
    if (num[i] == num[i - 1]) return false;
    else if (num[i] < num[i - 1]) isPeakFound = true;
    else if (isPeakFound && num[i] > num[i - 1]) {
      return false;
    }

    if (num[numLen - 1] > num[numLen - 2]) {
      return false;
    }

    if (i == num.length && !isPeakFound) return false;
  }

  return true;
}

num = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(isMountainArray(num));
