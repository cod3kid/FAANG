class Node {
  constructor(val, priority) {
    this.priority = priority;
    this.val = val;
  }
}

// Using Max Binary values

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentValue = this.values[parentIdx];

      if (element.priority <= parentValue.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parentValue;
      idx = parentIdx;
    }
    return this.values;
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let swap = null;

      let leftChild, rightChild;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      } else {
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("high fever", 3);
priorityQueue.enqueue("covid", 4);
priorityQueue.enqueue("common cold", 1);
priorityQueue.enqueue("stabbed in the chest", 7);
priorityQueue.enqueue("gunshot wound", 5);
// console.log(priorityQueue.values);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
