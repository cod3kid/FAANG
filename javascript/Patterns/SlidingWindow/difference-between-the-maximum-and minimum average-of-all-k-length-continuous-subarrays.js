function differenceBetweenTheMaximumAndMinimumAverage(arr, k) {
  windowSum = 0;
  start = 0;
  min = Infinity;
  max = -Infinity;

  for (i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      min = Math.min(min, windowSum / 2);
      max = Math.max(max, windowSum / 2);

      windowSum -= arr[start];
      start++;
    }
  }
  return max - min;
}

arr = [3, 8, 9, 15];
k = 2;
console.log(differenceBetweenTheMaximumAndMinimumAverage(arr, k));
