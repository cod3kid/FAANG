function squaringASortedArray() {
  left = 0;
  right = arr.length - 1;
  result = [];

  while (left <= right) {
    leftSqr = arr[left] * arr[left];
    rightSqr = arr[right] * arr[right];

    if (leftSqr > rightSqr) {
      result.push(leftSqr);
      left++;
    } else {
      result.push(rightSqr);
      right--;
    }
  }

  return result.reverse();
}

arr = [-2, -1, 0, 2, 3];
console.log(squaringASortedArray(arr));
// Use two pointers from each end. Gradually build the array and the reverse it to get the sorted squared array
// https://www.youtube.com/watch?v=FPCZsG_AkUg NeetCode
