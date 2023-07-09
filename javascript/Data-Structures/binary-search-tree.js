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

  bfs() {
    let queue = [];
    let data = [];

    queue.push(this.root);

    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  dfs_preorder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  dfs_postorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      data.push(node.value);
    }

    traverse(this.root);

    return data;
  }

  dfs_inorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
// console.log(
//   bst.find(10),
//   bst.find(21),
//   bst.find(78),
//   bst.find(7),
//   bst.find(87)
// );
console.log(bst.bfs());
console.log(bst.dfs_preorder());
console.log(bst.dfs_postorder());
console.log(bst.dfs_inorder());
