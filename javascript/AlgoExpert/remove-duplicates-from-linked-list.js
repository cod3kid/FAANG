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

  removeDuplicates() {
    let currentNode = this.head;

    while (currentNode != null) {
      let nextDistinctNode = currentNode.next;

      while (
        nextDistinctNode != null &&
        nextDistinctNode.val === currentNode.val
      ) {
        nextDistinctNode = nextDistinctNode.next;
      }

      currentNode.next = nextDistinctNode;
      currentNode = nextDistinctNode;
    }

    return this;
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
console.log(list.removeDuplicates());
list.print();
