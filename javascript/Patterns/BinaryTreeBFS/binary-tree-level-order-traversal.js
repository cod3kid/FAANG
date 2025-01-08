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
var levelOrder = function (root) {
  if (!root) return [];
  let data = [];
  let queue = [];

  queue.push(root);

  while (queue.length) {
    let currentLevelValues = [];
    let currentLevelLength = queue.length;

    for (let i = 0; i < currentLevelLength; i++) {
      let node = queue.shift();

      if (!node) continue;
      currentLevelValues.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    data.push(currentLevelValues);
  }

  return data;
};
