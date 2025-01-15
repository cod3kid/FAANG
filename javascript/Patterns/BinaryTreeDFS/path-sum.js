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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let found = false;

  const dfs = (node, currentSum) => {
    if (!node) return;

    currentSum += node.val;

    if (!node.left && !node.right) {
      if (currentSum === targetSum) {
        found = true;
      }
      return;
    }

    if (node.left) dfs(node.left, currentSum);
    if (node.right) dfs(node.right, currentSum);
  };

  dfs(root, 0);

  return found;
};
