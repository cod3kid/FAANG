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

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let swap = null;

      let leftChild, rightChild;
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      } else {
        this.heap[idx] = this.heap[swap];
        this.heap[swap] = element;
        idx = swap;
      }
    }
  }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(55);
maxHeap.insert(1);
maxHeap.insert(45);
maxHeap.insert(199);
console.log(maxHeap.extractMax());
maxHeap.extractMax();

console.log(maxHeap.heap);
