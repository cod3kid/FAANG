const locations = [
  [1, 3],
  [2, 4],
  [2, -1],
  [-2, 2],
  [5, 3],
  [3, -2],
];

const distances = [];
for (let i = 0; i < locations.length; i++) {
  distances.push(
    Math.ceil(
      Math.sqrt(
        Math.pow(locations[i][0] - 0, 2) + Math.pow(locations[i][1] - 0, 2)
      ) * 10
    ) / 10
  );
}

const bubbleUp = () => {
  let idx = maxHeap.length - 1;
  const element = maxHeap.at(-1);

  while (idx > 0) {
    const parentIdx = Math.floor((idx - 1) / 2);
    const parentElement = maxHeap[parentIdx];

    if (element <= parentElement) break;

    maxHeap[parentIdx] = element;
    maxHeap[idx] = parentElement;
    idx = parentIdx;
  }
};

const insert = (value) => {
  maxHeap.push(value);
  bubbleUp();
};

let maxHeap = [];

distances.forEach((distance) => {
  insert(distance);
});

console.log("Distances", distances);
console.log("Max Heap", maxHeap);
