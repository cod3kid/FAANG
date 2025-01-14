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

  let inorderLeft = inorder.slice(0, rootIdx);
  let inorderRight = inorder.slice(rootIdx + 1);

  let postorderLeft = postorder.slice(0, inorderLeft.length);
  let postorderRight = postorder.slice(inorderLeft.length);

  root.left = buildTree(inorderLeft, postorderLeft);
  root.right = buildTree(inorderRight, postorderRight);

  return root;
};
