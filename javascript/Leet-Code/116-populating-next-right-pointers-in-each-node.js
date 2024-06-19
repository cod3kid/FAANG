/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let currentLevelNodeCount = queue.length;

    for (let i = 0; i < currentLevelNodeCount; i++) {
      let node = queue.shift();

      if (!node) continue;
      if (i < currentLevelNodeCount - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};
