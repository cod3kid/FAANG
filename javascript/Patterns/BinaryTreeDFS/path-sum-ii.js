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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];

  const dfs = (node, current) => {
    if (!node) return;

    current.push(node.val);
    if (!node.left && !node.right) {
      let currentSum = current.reduce((acc, val) => acc + val, 0);
      if (currentSum === targetSum) {
        result.push([...current]);
      }
      current.pop();
      return;
    }

    dfs(node.left, current);
    dfs(node.right, current);
    current.pop();
  };

  dfs(root, []);

  return result;
};
