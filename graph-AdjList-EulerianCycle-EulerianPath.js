function LinkedList(val) {
    this.val = val
    this.next = null
  }
  
  function arrToLL(arr) {
    const len = arr.length
    if (!len) return null
    const root = new ListNode(arr[0])
    let node = root
    for (let i = 1; i < len; i++) {
      node.next = new ListNode(arr[i])
      node = node.next
    }
    return root
  }
  
  function LLToArr(head) {
    const arr = []
    while (head) {
      arr.push(head.val)
      head = head.next
    }
    return arr
  }
  
  function printList(head) {
    const arr = LLToArr(head)
    console.log(arr)
    return arr
  }

class Graph {
  // Using Adjacency list to store graph edge info. It'll be an array of LinkedList of integers.
  #adjList
  // vertices count
  #vCount
  constructor(size = 0) {
    this.#adjList = new Array(size).fill().map(() => new LinkedList())
    this.#vCount = size
  }

  get adjList() {
    return this.#adjList
  }

  addEdge(start, end, biDir = true) {
    this.#adjList[start].appendToTail(end)
    if (biDir) {
      this.#adjList[end].appendToTail(start)
    }
  }

  hasEulerianCycle() {
    let odd = 0
    for (const vertex of this.#adjList) {
      if (vertex.size % 2 === 1) odd++
    }
    if (odd === 0) return true
    else return false
  }

  hasEulerianPath() {
    let odd = 0
    for (const vertex of this.#adjList) {
      if (vertex.size % 2 === 1) odd++
    }
    if (odd === 0 || odd === 2) return true
    else return false
  }
}