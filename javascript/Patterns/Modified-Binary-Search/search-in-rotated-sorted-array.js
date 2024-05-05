const binarySearchRotated = (arr, target) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] >= arr[start]) {
      if (arr[start] <= target && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

arr = [48, 52, 57, 62, 68, 72, 5, 7, 12, 17, 21, 28, 33, 37, 41];
target = 57;
console.log(binarySearchRotated(arr, target));
