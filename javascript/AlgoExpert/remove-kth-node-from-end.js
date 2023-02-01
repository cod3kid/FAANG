class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      //   this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  removeKthNodeFromEnd(index) {
    if (index < 0 || index >= this.length) return undefined;

    // Find Size of the Linked List
    let currentNode = this.head;
    let count = 1;

    while (currentNode.next) {
      currentNode = currentNode.next;
      count++;
    }

    const findIndex = count - index - 1;

    currentNode = this.head;
    count = 0;

    while (count != findIndex) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.next = currentNode.next.next;
  }

  print() {
    let current = this.head;

    while (current.next) {
      console.log(current.val);
      current = current.next;
    }
    console.log(current.val);
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(3);
list.push(3);
list.push(3);

list.push(4);
list.push(6);
list.push(6);
list.push(7);
// list.print();
console.log(list.removeKthNodeFromEnd(0));
list.print();
