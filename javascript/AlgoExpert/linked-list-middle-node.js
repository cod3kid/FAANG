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

  findMiddleNode() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode != null) {
      count++;
      currentNode = currentNode.next;
    }

    let middleNode = this.head;
    for (let i = 0; i < Math.floor(count / 2); i++) {
      middleNode = middleNode.next;
    }

    return middleNode;
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
list.push(30);

// list.push(4);
list.push(6);
list.push(6);
list.push(7);
// list.print();
console.log(list.findMiddleNode());
list.print();
