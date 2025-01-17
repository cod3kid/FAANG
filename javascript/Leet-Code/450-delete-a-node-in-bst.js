/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    /* 
            This else block is for key === root.val
            The below if-else block will get executed only if the tree has only one node
        */

    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }

    // Find the min from the right sub tree, min will be always at the left bottom
    let current = root.right;
    while (current.left) {
      current = current.left;
    }
    root.val = current.val;
    root.right = deleteNode(root.right, root.val);

    return root;
  }

  return root;
};
