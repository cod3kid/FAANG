function twoNumberSum(arr, target) {
  left = 0;
  right = arr.length - 1;

  while (left < right) {
    currSum = arr[left] + arr[right];
    if (currSum === target) {
      return [left, right];
    } else if (currSum < target) {
      left++;
    } else {
      right--;
    }
  }
}

arr = [3, 2, 4];
target = 6;
console.log(twoNumberSum(arr, target));
// The array have to be sorted
