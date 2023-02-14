const diagonalDifference = (arr) => {
  let primaryDiagonalNums = [];
  let secondaryDiagonalNums = [];
  for (let i = 0; i < arr.length; i++) {
    primaryDiagonalNums.push(arr[i][i]);
    secondaryDiagonalNums.push(arr[i][arr.length - 1 - i]);
  }

  const sum1 = primaryDiagonalNums.reduce((curr, i) => curr + i, 0);
  const sum2 = secondaryDiagonalNums.reduce((curr, i) => curr + i, 0);

  return Math.abs(sum1 - sum2);
};

arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(diagonalDifference(arr));
