/**
Why the approach uses Min Heap instead of Max Heap?
That's a hackkkk as the problem doesn't require us to 
pop from the heap. 

So always keep the heap size to K, and pop it if the 
heap size is greater than K, this way we'll be removing 
the unnecessary smallest element and the new smallest element will be Kth largest
 */
var KthLargest = function (k, nums) {
  this.minHeap = [];
  this.k = k;

  for (let num of nums) {
    this.bubbleUp(num);
  }

  while (this.minHeap.length > k) {
    this.bubbleDown();
  }
};

KthLargest.prototype.bubbleUp = function (val) {
  this.minHeap.push(val);
  let idx = this.minHeap.length - 1;
  const element = this.minHeap[idx];

  while (idx > 0) {
    const parentIdx = Math.floor((idx - 1) / 2);
    const parentValue = this.minHeap[parentIdx];

    if (element >= parentValue) break;

    this.minHeap[parentIdx] = element;
    this.minHeap[idx] = parentValue;
    idx = parentIdx;
  }
};

KthLargest.prototype.bubbleDown = function () {
  const max = this.minHeap[0];
  const end = this.minHeap.pop();

  if (this.minHeap.length > 0) {
    this.minHeap[0] = end;
    let idx = 0;
    const length = this.minHeap.length;
    const element = this.minHeap[0];

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let swap = null;

      let leftChild, rightChild;
      if (leftChildIdx < length) {
        leftChild = this.minHeap[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.minHeap[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      } else {
        this.minHeap[idx] = this.minHeap[swap];
        this.minHeap[swap] = element;
        idx = swap;
      }
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.bubbleUp(val);

  if (this.minHeap.length > this.k) {
    this.bubbleDown();
  }

  return this.minHeap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
