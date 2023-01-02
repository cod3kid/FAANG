function smallestSubArrayWithAGivenSum(arr, k) {
  start = 0;
  windowSum = 0;
  smallestLen = Infinity;

  for (i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    while (windowSum >= k) {
      smallestLen = Math.min(i - start + 1, smallestLen);
      windowSum -= arr[start];
      start++;
    }
  }
  return smallestLen;
}

arr = [2, 1, 5, 2, 3, 2];
k = 7;
console.log(smallestSubArrayWithAGivenSum(arr, k));
