//Leetcode 55 Medium
//DP

function jumpGame(arr) {
  let n = arr.length;
  let can_reach = 0;

  for (let i = can_reach; i <= can_reach; i++) {
    if (i == n - 1) {
      return true;
    }

    can_reach = Math.max(can_reach, i + arr[i]);
  }
  return false;
}

arr = [2, 3, 1, 1, 4];
console.log(jumpGame(arr));
// TC: 0(n)  SC: O(1)
// If there are no 0, we'll always be able to reach the end
// If there are 0, and if we cross it, we'll reach the end
