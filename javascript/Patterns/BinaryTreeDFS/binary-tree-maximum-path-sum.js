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
var maxPathSum = function (root) {
  let result = root.val;

  const dfs = (node) => {
    if (!node) return 0;

    let leftMax = Math.max(dfs(node.left), 0);
    let rightMax = Math.max(dfs(node.right), 0);

    // Global Max Path Sum
    result = Math.max(result, node.val + leftMax + rightMax);

    // Max Path Sum at Current Node
    return node.val + Math.max(leftMax, rightMax);
  };

  dfs(root);

  return result;
};
