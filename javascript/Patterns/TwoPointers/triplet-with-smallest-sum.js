function tripletWithSmallestSum(arr, target) {
  let count = 0;

  for (i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];

      if (currentSum < target) {
        // Can't understand this line of code
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}

arr = [-1, 0, 2, 3];
target = 3;
console.log(tripletWithSmallestSum(arr, target));
// target will all be greater than the sum of the triplets
