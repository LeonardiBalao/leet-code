// Min Heap Implementation

// Custom MinHeap implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Insert a value into the heap
  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }

  // Remove and return the minimum value
  pop() {
    if (this.size() === 0) return undefined;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this._sinkDown(0);
    }
    return min;
  }

  // Return the minimum value without removing
  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  // Helper to maintain heap property after insertion
  _bubbleUp(idx) {
    const val = this.heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= val) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = val;
  }

  // Helper to maintain heap property after removal
  _sinkDown(idx) {
    const length = this.heap.length;
    const val = this.heap[idx];
    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let swap = null;
      if (left < length && this.heap[left] < val) swap = left;
      if (
        right < length &&
        this.heap[right] < (swap === null ? val : this.heap[left])
      )
        swap = right;
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      idx = swap;
    }
    this.heap[idx] = val;
  }
}

function findKthLargest(nums, k) {
  const heap = new MinHeap();
  for (const num of nums) {
    heap.push(num);
    if (heap.size() > k) heap.pop();
  }
  return heap.peek();
}
