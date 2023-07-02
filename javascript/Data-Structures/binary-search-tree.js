class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;
    while (!found && current) {
      if (value === current.value) {
        found = true;
      } else if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return found;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(7);
bst.insert(13);
bst.insert(87);
bst.insert(21);
bst.insert(78);
bst.insert(12);
console.log(
  bst.find(10),
  bst.find(21),
  bst.find(78),
  bst.find(7),
  bst.find(87)
);
