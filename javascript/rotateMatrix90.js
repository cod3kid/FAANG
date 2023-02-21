a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (i = 0; i < a.length; i++) {
  for (j = 0; j < i; j++) {
    let swap = a[i][j];
    a[i][j] = a[j][i];
    a[j][i] = swap;
  }
}

for (i = 0; i < a.length; i++) {
  for (j = 0; j < Math.floor(a.length / 2); j++) {
    let swap = a[i][j];
    a[i][j] = a[i][a.length - 1 - j];
    a[i][a.length - 1 - j] = swap;
  }
}

const rotateMatrixBy90 = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentRow = [];
    for (let j = 0; j < arr.length; j++) {
      currentRow.push(arr[j][i]);
    }

    result.push([...currentRow.reverse()]);
  }
  return result;
};

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotateMatrixBy90(arr));
console.log(a);
