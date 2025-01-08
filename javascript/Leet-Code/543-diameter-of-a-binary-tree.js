var diameterOfBinaryTree = function (root) {
  // The maximum path value -diameter-.
  let maxPathVal = 0;

  // Helper function to calculate the longest path from the current node to a leaf.
  const farthestPath = (node) => {
    // Base case: if the node is null, the path length is 0.
    if (!node) return 0;

    // Recursively calculate the longest path in the left subtree.
    const leftLongestPath = farthestPath(node.left);

    // Recursively calculate the longest path in the right subtree.
    const rightLongestPath = farthestPath(node.right);

    // Update the maximum path value if the current path (left + right) is greater.
    maxPathVal = Math.max(maxPathVal, leftLongestPath + rightLongestPath);

    // Return the length of the longest path passing through this node.
    // It's either the left or the right subtree + 1 as a count for the current node.
    return Math.max(leftLongestPath, rightLongestPath) + 1;
  };

  // Start the recursion from the root node.
  farthestPath(root);

  // Return the maximum diameter of the binary tree.
  return maxPathVal;
};
