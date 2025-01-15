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
var postorderTraversal = function (root) {
  let result = [];

  const dfs = (node) => {
    if (!node) return null;

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
    result.push(node.val);
  };

  dfs(root);

  return result;
};
