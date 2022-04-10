export class Queue {
  constructor() {
    this.count = 0  //控制队列的大小
    this.lowestCount = 0  //追踪第一个元素
    this.items = {}
  }
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }
  isEmpty() {
    return this.count - this.lowestCount === 0
  }
  dequeue() {
    if (this.isEmpty()) return undefined
    const result = this.count[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }
  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }
  size() {
    return this.count - this.lowestCount
  }
  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  toString() {
    if (this.isEmpty()) return ''
    let objStr = `${this.items[this.lowestCount]}`
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      objStr = `${objStr},${this.items[i]}`
    }
    return objStr
  }

}

const queue = new Queue()
queue.enqueue('Jack')
queue.enqueue('durant')
queue.enqueue('Curry')
queue.dequeue()
queue.dequeue()
console.log(queue)