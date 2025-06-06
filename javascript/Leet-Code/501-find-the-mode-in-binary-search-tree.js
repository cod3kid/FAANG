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
var findMode = function (root) {
  let map = {};

  const dfs = (node) => {
    if (!node) return;

    map[node.val] = (map[node.val] || 0) + 1;

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };

  dfs(root);
  let max = 0;
  let result = [];

  Object.entries(map).forEach((entry) => {
    const [key, value] = entry;
    if (value > max) {
      max = value;
      result = [parseInt(key)];
    } else if (value === max) {
      result.push(parseInt(key));
    }
  });
  return result;
};
