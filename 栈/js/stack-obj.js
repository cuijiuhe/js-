//使用对象
class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  pop() {
    if (this.isEmpty()) return undefined
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }
  clear() {
    this.count = 0
    this.items = {}
  }
  toString() {
    if (this.isEmpty()) return ''
    let objStr = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objStr = `${objStr}${this.items[i]}`
    }
    return objStr
  }
}

const stack = new Stack()

//二进制转10进制
function decimalTo(decNumber) {
  let number = decNumber
  let rem
  let toStr = ''
  while(number > 0) {
    rem = Math.floor(number % 2)
    stack.push(rem)
    number = Math.floor(number / 2)
  }

  while(!stack.isEmpty()) {
    toStr += stack.pop()
  }
  return toStr
}

decimalTo(10)
