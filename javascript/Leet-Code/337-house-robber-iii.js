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
var rob = function (root) {
  let dfs = (node) => {
    if (!node) return [0, 0];

    let leftPairs = dfs(node.left);
    let rightPairs = dfs(node.right);

    let withRoot = node.val + leftPairs[1] + rightPairs[1];
    let withoutRoot = Math.max(...leftPairs) + Math.max(...rightPairs);

    return [withRoot, withoutRoot];
  };

  return Math.max(...dfs(root));
};
