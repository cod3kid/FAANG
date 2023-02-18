function productSum(array, level = 1) {
  let totalSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      totalSum += productSum(array[i], level + 1);
    } else {
      totalSum += array[i];
    }
  }

  return totalSum * level;
}

let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
console.log(productSum(array));
