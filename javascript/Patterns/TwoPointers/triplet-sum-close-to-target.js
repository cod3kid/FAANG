function tripletSumCloseToTarget(arr, target) {
  arr.sort((a, b) => a - b);
  smallestDifference = Infinity;

  for (i = 0; i < arr.length - 2; i++) {
    left = i + 1;
    right = arr.length - 1;

    while (left < right) {
      const targetDifference = target - (arr[i] + arr[left] + arr[right]);

      if (targetDifference === 0) {
        return target - targetDifference;
      }

      if (Math.abs(targetDifference) < Math.abs(smallestDifference)) {
        smallestDifference = targetDifference;
      }

      //   //the second part of the followinf 'if' is to handle the smallest sum
      //   //when we have more than one solution
      //   if (
      //     Math.abs(targetDifference) < Math.abs(smallestDifference) ||
      //     (Math.abs(targetDifference) === Math.abs(smallestDifference) &&
      //       targetDifference > smallestDifference)
      //   ) {
      //     //save the closest and the biggest difference
      //     smallestDifference = targetDifference;
      //   }

      if (targetDifference > 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return target - smallestDifference;
}

arr = [-2, 0, 1, 2];
target = 2;
console.log(tripletSumCloseToTarget(arr, target));
