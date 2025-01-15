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
var minDepth = function (root) {
  if (!root) return 0;

  let minDepth = Infinity;
  const dfs = (node, currentDepth) => {
    if (!node) return;

    currentDepth += 1;

    if (!node.left && !node.right) {
      minDepth = Math.min(minDepth, currentDepth);
      return;
    }

    if (node.left) dfs(node.left, currentDepth);
    if (node.right) dfs(node.right, currentDepth);
  };

  dfs(root, 0);

  return minDepth;
};
