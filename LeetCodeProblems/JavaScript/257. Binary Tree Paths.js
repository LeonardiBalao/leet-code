var binaryTreePaths = function (root) {
  const paths = []; // Store all root-to-leaf paths

  function dfs(node, path) {
    if (!node) return; // Base case: null node

    path.push(node.val); // Add current node value to path

    if (!node.left && !node.right) {
      // Leaf node
      paths.push(path.join("->")); // Add path to result
    } else {
      dfs(node.left, [...path]); // Recurse on left child
      dfs(node.right, [...path]); // Recurse on right child
    }
  }

  dfs(root, []); // Start DFS from root
  return paths; // Return all paths
};
