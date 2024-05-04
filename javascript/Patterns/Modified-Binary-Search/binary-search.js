const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    }
  }

  return -1;
};

const arr = [-100, -67, -55, -50, -49, -40, -33, -22, -10, -5];
const target = -32;
const index = binarySearch(arr, target);

if (index !== -1) {
  console.log(target + " exists in the array at index " + index);
} else {
  console.log(target + " does not exist in the array");
}
