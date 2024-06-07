twoSum = function (arr, target) {
  let map = {};

  for (let i in arr) {
    let temp = target - arr[i];
    if (map[temp]) {
      return [parseInt(map[temp]), parseInt(i)];
    }

    map[arr[i]] = i;
  }
};
