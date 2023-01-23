class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      // Just to detach prev and next when it's returned
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    let oldHead = this.head;
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      // Just to detach  next when it's returned
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //   get(index) {
  //     if (index < 0 || index >= this.length) return undefined;

  //     let current = this.head;
  //     let count = 0;

  //     while (count != index) {
  //       current = current.next;
  //       count++;
  //     }

  //     return current;
  //   }

  // Optimal
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index <= this.length / 2) {
      let currentNode = this.head;
      let count = 0;

      while (index != count) {
        currentNode = currentNode.next;
        count++;
      }

      return currentNode;
    }

    let currentNode = this.tail;
    let count = this.length - 1;

    while (index != count) {
      currentNode = currentNode.prev;
      count--;
    }
    return currentNode;
  }
}

const dll = new DoublyLinkedList();
dll.push(5);
dll.push(11);
dll.unshift(20);
console.log(dll.get(0));
