class MaxBinaryHeap {
  constructor() {
    this.heap = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentValue = this.heap[parentIdx];

      if (element <= parentValue) break;

      this.heap[parentIdx] = element;
      this.heap[idx] = parentValue;
      idx = parentIdx;
    }
    return this.heap;
  }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(55);
maxHeap.insert(1);
maxHeap.insert(45);
maxHeap.insert(199);

console.log(maxHeap.heap);
