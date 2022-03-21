function isMountainArray(num) {

  isPeakFound = false
  numLen = num.length

  if (numLen < 3) {
    return false
  }

  for (i = 1; i < num.length - 1; i++) {
    if (num[i] == num[i - 1])
      return false
    else if (num[i] < num[i - 1])
      isPeakFound = true
    else if (num[i] > num[i - 1]) {
      if (isPeakFound) {
        return false
      }
    }

    if (num[numLen - 1] > num[numLen - 2]) {
      return false
    }

  }
  return true
}

num = [0,1,2,3,4,5,2,1]
console.log(isMountainArray(num))