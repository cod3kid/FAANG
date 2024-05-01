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
}

const list1 = new SinglyLinkedList();
list1.push(1);
list1.push(2);
list1.push(4);

const list2 = new SinglyLinkedList();
list2.push(1);
list2.push(4);
list2.push(4);

const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;

  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }

  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
  return list1;
};

const mergedList = mergeTwoLists(list1, list2);
const all = [];
let current = mergedList.head;
all.push(current.val);

while (current.next) {
  current = current.next;
  all.push(current.val);
}

console.log(all);
