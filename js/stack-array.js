// 数组实现
class Stack {
  constructor() {
    this.items = []
  }
  push(element) { //添加一个(或几个)新元素到栈顶
    this.items.push(element)
  }
  pop() { //移除栈顶的元素，同时返回被移除的元素
    return this.items.pop()
  }
  peek() {  //返回栈顶的元素，不对栈做任何修改(该方法不会移除栈顶的元素，仅仅返回它)
    return this.items[this.items.length -1]
  }
  isEmpty() { //如果栈里没有任何元素就返回 true，否则返回 false
    // if (this.items.length > 0) return true
    return this.items.length === 0
  }
  clear() { //移除栈里的所有元素
    this.items = []
  }
  size() {  //返回栈里的元素个数。该方法和数组的 length 属性很类似
    return this.items.length
  }
}

const stack = new Stack()


stack.push(5)
stack.push(8)
console.log(stack.peek())
stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())