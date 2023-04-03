// function fibonacciSequence(n) {
//   if (n <= 1) {
//     return n;
//   }

//   return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
// }

// function arraySum(array) {
//   if (array.length === 0) {
//     return 0;
//   }

//   return array[0] + arraySum(array.slice(1));
// }

// function reverseString(str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverseString(str.substr(1)) + str.charAt(0);
//   }
// }

// // ** data structure ** //
// class Stack {
//   constructor() {
//     this.items = [];
//     this.minEl;
//   }

//   add(element) {
//     if (this.items.length !== 0) {
//       this.minEl > element ? (this.minEl = element) : this.minEl;
//     } else {
//       this.minEl = element;
//     }

//     return this.items.push(element);
//   }

//   remove() {
//     if (this.items.length > 0) {
//       this.items.pop();
//     }
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   clear() {
//     this.items = [];
//   }

//   minimumElement() {
//     return this.minEl;
//   }
// }

// class Queue {
//   constructor() {
//     this.items = [];
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }

//   enqueue(element) {
//     this.items[this.tailIndex] = element;
//     this.tailIndex++;
//   }

//   dequeue() {
//     const removedItem = this.items[tailIndex].shift();
//     this.tailIndex--;
//     return removedItem;
//   }

//   reverseQueue() {
//     return this.items.map((element, index) => {
//       return this.items[this.tailIndex - 1 - index];
//     });
//   }
// }

// class Queue2 {
//   constructor() {
//     this.enqueueStack = [];
//     this.dequeueStack = [];
//   }
//   enqueue(item) {
//     this.enqueueStack.push(item);
//   }
//   dequeue() {
//     if (this.dequeueStack.length === 0) {
//       while (this.enqueueStack.length > 0) {
//         const item = this.enqueueStack.pop();
//         this.dequeueStack.push(item);
//       }
//     }

//     return this.dequeueStack.pop();
//   }
// }

// ************************************
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
      //Means it's just empty list
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  getFirst() {
    // return first node (head node)
    // return this.head;

    // return first node data (data inside head)
    return this.head.data;
  }

  /*
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  */
}

const list = new LinkedList();

const node1 = new Node("first");
const node2 = new Node("second");
const node3 = new Node("third");

list.appendNode(node1);
list.appendNode(node2);
list.appendNode(node3);

function deleteNode(linkedList, nodeNumber) {
  if (linkedList.head === null) {
    return null;
  }

  if (nodeNumber === 1) {
    let deletedNode = linkedList.head;
    linkedList.head = linkedList.head.next;
    return deletedNode;
  }

  let prev = null;
  let curr = linkedList.head;
  let i = 1;

  while (i < nodeNumber && curr !== null) {
    prev = curr;
    curr = curr.next;
    i++;
  }

  if (curr === null) {
    return null;
  }

  prev.next = curr.next;
  return linkedList;
}

function reverseLinkedList(linkedList) {
  let prev = null;
  let curr = linkedList.head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  linkedList.head = prev;
  return linkedList;
}
