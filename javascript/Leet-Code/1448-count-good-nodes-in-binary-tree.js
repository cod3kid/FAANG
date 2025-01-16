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
var goodNodes = function (root) {
  let count = 0;

  const dfs = (node, path) => {
    if (!node) return;

    path.push(node.val);
    if (Math.max(...path) === node.val) count++;

    if (node.left) dfs(node.left, [...path]);
    if (node.right) dfs(node.right, [...path]);
  };

  dfs(root, []);

  return count;
};
