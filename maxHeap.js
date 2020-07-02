let maxHeap = class {
    constructor(arr) {
      this.arrLen = arr.length;
      this.arr = arr;
    }
  
    size() {
      return this.arrLen
    }
  
    buildHeap() {
      // Index of last non-leaf node 
      let startIdx = Math.floor((this.arrLen / 2)) - 1;
  
      // Perform reverse level order traversal from last non-leaf node and heapify each node 
      for (let i = startIdx; i >= 0; i--) {
        this.heapify(this.arr, this.arrLen, i);
      }
      return this.arr;
    }
    heapify(arr, n, i) {
      let largest = i; // Initialize largest as root 
      let l = 2 * i + 1; // left = 2*i + 1 
      let r = 2 * i + 2; // right = 2*i + 2 
  
      // If left child is larger than root 
      if (l < n && arr[l] > arr[largest])
        largest = l;
  
      // If right child is larger than largest so far 
      if (r < n && arr[r] > arr[largest])
        largest = r;
  
      // If largest is not root 
      if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
  
        // Recursively heapify the affected sub-tree 
        this.heapify(arr, n, largest);
      }
    }
  }
  
  let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8];
  
  let n = new maxHeap(array);
  console.log(n.buildHeap())