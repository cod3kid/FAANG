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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // Do level order traversal and return the last element of each row
  if (!root) return [];
  let queue = [];
  let result = [];
  queue.push(root);

  while (queue.length) {
    let currentLevelNodes = [];
    let currentLevelLength = queue.length;

    for (let i = 0; i < currentLevelLength; i++) {
      let node = queue.shift();
      if (!node) continue;

      currentLevelNodes.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevelNodes.pop());
  }

  return result;
};
