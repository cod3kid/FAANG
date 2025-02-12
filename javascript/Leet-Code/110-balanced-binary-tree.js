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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let isBalanced = true;

  const maxDepth = (node) => {
    if (!node) return 0;

    let leftDepth = maxDepth(node.left);
    let rightDepth = maxDepth(node.right);
    if (Math.abs(leftDepth - rightDepth) > 1) {
      isBalanced = false;
    }
    return Math.max(leftDepth, rightDepth) + 1;
  };
  maxDepth(root);
  return isBalanced;
};
