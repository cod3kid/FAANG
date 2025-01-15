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
var sumRootToLeaf = function (root) {
  let path = [];

  const dfs = (node, curr) => {
    if (!node) return;

    curr += node.val;

    if (!node.left && !node.right) {
      path.push(curr);
      return;
    }

    if (node.left) dfs(node.left, curr);
    if (node.right) dfs(node.right, curr);
  };

  dfs(root, "");

  return path
    .map((item) => parseInt(item, 2))
    .reduce((acc, val) => acc + val, 0);
};
