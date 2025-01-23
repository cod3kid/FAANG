/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  let oldToNew = new Map();

  if (!node) return null;

  const dfs = (node) => {
    if (oldToNew.has(node)) return oldToNew.get(node);

    let copy = new _Node(node.val);
    oldToNew.set(node, copy);

    node.neighbors.forEach((neighbor) => {
      copy.neighbors.push(dfs(neighbor));
    });

    return copy;
  };

  return dfs(node);
};

// Neetcode Soln
