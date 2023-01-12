function tripletSumToZero(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  for (i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }

    let leftPtr = i + 1;
    let rightPtr = arr.length - 1;

    while (leftPtr < rightPtr) {
      let leftEl = arr[leftPtr];
      let rightEl = arr[rightPtr];
      let currentSum = leftEl + rightEl;

      if (-arr[i] === currentSum) {
        result.push([arr[i], leftEl, rightEl]);
        leftPtr++;
        rightPtr--;

        // while (leftPtr < rightPtr && arr[leftPtr] === arr[leftPtr - 1]) {
        //   leftPtr += 1; // skip same element to avoid duplicate triplets
        // }

        // while (leftPtr < rightPtr && arr[rightPtr] === arr[rightPtr + 1]) {
        //   rightPtr -= 1; // skip same element to avoid duplicate triplets
        // }
      } else if (-arr[i] > currentSum) {
        leftPtr++;
      } else {
        rightPtr--;
      }
    }
  }

  return result;
}

arr = [-3, 0, 1, 2, -1, 1, -2];
console.log(tripletSumToZero(arr));
