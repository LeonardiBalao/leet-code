function invertTree(root) {
  // Base case: if node is null, return null
  if (!root) {
    return null;
  }

  // Swap the left and right children
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  // Return the root of the inverted tree
  return root;
}
