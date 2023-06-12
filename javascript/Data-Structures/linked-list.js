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

  pop() {
    if (!this.head) return undefined;

    var current = this.head;
    var newTail = this.head;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    var newHead = this.head;
    this.head = newHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return this.head;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this.head;
  }

  get(index) {
    var current = this.head;
    var count = 0;

    if (index < 0 || index >= this.length) {
      return null;
    }

    while (index != count) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(index, newVal) {
    var foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = newVal;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length - 1) {
      this.push(val);
      return true;
    }

    var prevNode = this.get(index - 1);
    var nextNode = this.get(index);
    var newNode = new Node(val);

    prevNode.next = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (this.length <= 0 || index > this.length - 1) {
      return false;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return true;
    }

    var prevNode = this.get(index - 1);
    var nextNode = this.get(index + 1);

    prevNode.next = nextNode;
    this.length--;
    return true;
  }
}

var list = new SinglyLinkedList();
list.push("Start");
list.push("Middle");
// list.push("Second Last");
list.push("End");
// list.pop();
// list.shift();
// list.unshift("Pre Start");
// console.log(list.get(4));
// console.log(list.set(7, "Mid"));
// list.insert(1, "Second Last");
console.log(list.remove(0));
console.log(list);
