function maximumSumSubArrayOfSizeK(arr, k) {
  max = 0;
  start = 0;
  windowSum = 0;

  for (i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      max = Math.max(max, windowSum);
      windowSum -= arr[start];
      start++;
    }
  }

  return max;
}

arr = [2, 1, 5, 1, 3, 2];
k = 3;
console.log(maximumSumSubArrayOfSizeK(arr, k));
