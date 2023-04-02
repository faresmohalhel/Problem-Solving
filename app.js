function fibonacciSequence(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}

function arraySum(array) {
  if (array.length === 0) {
    return 0;
  }

  return array[0] + arraySum(array.slice(1));
}

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// ** data structure ** //
class Stack {
  constructor() {
    this.items = [];
    this.minEl;
  }

  add(element) {
    if (this.items.length !== 0) {
      this.minEl > element ? (this.minEl = element) : this.minEl;
    } else {
      this.minEl = element;
    }

    return this.items.push(element);
  }

  remove() {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  minimumElement() {
    return this.minEl;
  }
}

class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(element) {
    this.items[this.tailIndex] = element;
    this.tailIndex++;
  }

  dequeue() {
    const removedItem = this.items[tailIndex].shift();
    this.tailIndex--;
    return removedItem;
  }

  reverseQueue() {
    return this.items.map((element, index) => {
      return this.items[this.tailIndex - 1 - index];
    });
  }
}

class Queue2 {
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }
  enqueue(item) {
    this.enqueueStack.push(item);
  }
  dequeue() {
    if (this.dequeueStack.length === 0) {
      while (this.enqueueStack.length > 0) {
        const item = this.enqueueStack.pop();
        this.dequeueStack.push(item);
      }
    }

    return this.dequeueStack.pop();
  }
}
