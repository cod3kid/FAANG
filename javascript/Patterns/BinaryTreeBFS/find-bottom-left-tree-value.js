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
var findBottomLeftValue = function (root) {
  let queue = [];
  let result = [];
  queue.push(root);

  while (queue.length) {
    let currentLevel = [];
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    result.push([...currentLevel]);
  }

  return result.at(-1)[0];
};
