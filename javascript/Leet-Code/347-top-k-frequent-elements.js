const topKFrequentElements = (arr, k) => {
  const map = {};
  for (let i of arr) {
    map[i] = (map[i] || 0) + 1;
  }

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => parseInt(item[0]));
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topKFrequentElements(nums, k));
