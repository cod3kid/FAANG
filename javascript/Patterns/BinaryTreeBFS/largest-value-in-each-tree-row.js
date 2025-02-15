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
var largestValues = function (root) {
  if (!root) return [];

  let queue = [];
  let result = [];
  queue.push(root);

  while (queue.length) {
    let queueLength = queue.length;
    let currentLevelMax = -Infinity;

    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();

      if (!node) continue;

      currentLevelMax = Math.max(currentLevelMax, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevelMax);
  }

  return result;
};
