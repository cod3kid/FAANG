/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let result1 = [];
  let result2 = [];

  const dfs = (node, result) => {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push(node.val);
      return;
    }

    if (node.left) dfs(node.left, result);
    if (node.right) dfs(node.right, result);
  };

  dfs(root1, result1);
  dfs(root2, result2);

  return JSON.stringify(result1) === JSON.stringify(result2);
};
