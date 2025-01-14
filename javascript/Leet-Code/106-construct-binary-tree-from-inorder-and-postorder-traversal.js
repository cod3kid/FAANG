/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  let rootVal = postorder.pop();
  let root = new TreeNode(rootVal);
  let rootIdx = inorder.indexOf(rootVal);

  root.right = buildTree(inorder.slice(rootIdx + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIdx), postorder);

  return root;
};
