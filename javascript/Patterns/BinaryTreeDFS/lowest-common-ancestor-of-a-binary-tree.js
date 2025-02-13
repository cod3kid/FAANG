/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    if (!node || node === p || node === q) {
      return node;
    }

    let resL = dfs(node.left);
    let resR = dfs(node.right);

    return resL && resR ? node : resL || resR;
  };

  return dfs(root);
};
