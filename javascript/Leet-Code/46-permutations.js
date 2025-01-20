var permArr = [],
  usedChars = [];

function permutations(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permutations(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
}

let input = [1, 4, 5];
console.log(permutations(input));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const swapStr = (numsu, idx1, idx2) => {
  let nums = structuredClone(numsu);
  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;

  return nums;
};

function permuteComb(nums, currentIdx, result) {
  if (currentIdx === nums.length - 1) {
    result.push(nums);
    return;
  }

  for (let i = currentIdx; i < nums.length; i++) {
    let swappedStr = swapStr(nums, currentIdx, i);
    permuteComb(swappedStr, currentIdx + 1, result);
  }
}

var permute = function (nums) {
  let result = [];
  permuteComb(nums, 0, result);

  return result;
};

// DFS Backtracking Easy BruteForce Soln
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let current = [];

  const backtrack = () => {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!current.includes(nums[i])) {
        current.push(nums[i]);
        backtrack();
        current.pop();
      }
    }
  };

  backtrack();
  return result;
};
