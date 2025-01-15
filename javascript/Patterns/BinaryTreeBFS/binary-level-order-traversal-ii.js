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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let currentLevelNodes = [];
    let currentLevelNodesLength = queue.length;
    for (let i = 0; i < currentLevelNodesLength; i++) {
      let node = queue.shift();

      if (!node) continue;
      currentLevelNodes.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(currentLevelNodes);
  }

  return result;
};
