/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let result = [];

  const dfs = (node) => {
    if (!node) {
      result.push("N");
      return;
    }

    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // 1,3,5,N,5,7,N
  data = data.split(",");
  let idx = 0;
  const dfs = () => {
    if (data[idx] === "N") {
      idx++;
      return null;
    }

    let node = new TreeNode(parseInt(data[idx]));
    idx++;

    node.left = dfs();
    node.right = dfs();

    return node;
  };

  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
