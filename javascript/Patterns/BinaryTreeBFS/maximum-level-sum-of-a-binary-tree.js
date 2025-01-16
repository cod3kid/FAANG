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
 * @return {number}
 */
var maxLevelSum = function (root) {
  let queue = [];
  queue.push(root);
  let max = { level: null, value: -Infinity };
  let level = 0;

  while (queue.length) {
    level++;
    let currentSum = 0;
    let currentLevelLength = queue.length;

    for (let i = 0; i < currentLevelLength; i++) {
      let node = queue.shift();

      if (!node) continue;

      currentSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (currentSum > max.value) {
      max = { level, value: currentSum };
    }
  }
  return max.level;
};
