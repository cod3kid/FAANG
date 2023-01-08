function twoNumberSum(arr, target) {
  left = 0;
  right = arr.length - 1;
  actualArr = [...arr];
  arr.sort((a, b) => a - b);

  while (left < right) {
    currSum = arr[left] + arr[right];
    if (currSum === target) {
      idx1 = actualArr.indexOf(arr[left]);
      actualArr[idx1] = null;
      num2 = arr[right];
      return [idx1, actualArr.indexOf(arr[right])];
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
