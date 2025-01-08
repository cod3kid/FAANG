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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let head = null;
  const dfs = (node) => {
    if (node.right) dfs(node.right);
    if (node.left) dfs(node.left);

    node.left = null;
    node.right = head;
    head = node;
  };

  if (root) dfs(root);
};

/*
Postorder Traversal: The tree is traversed in a reverse order of the desired flattened list (right -> left -> root).
In-Place Transformation: No additional data structures are used; the tree is modified directly.
Reversal: By processing the right child first, the flattened list is constructed from the bottom up, ensuring all nodes are linked correctly.
*/
