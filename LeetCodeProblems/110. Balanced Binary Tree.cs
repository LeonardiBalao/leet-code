// Public method to determine if the binary tree is height-balanced
public bool IsBalanced(TreeNode root) {
	// Start the recursive check from the root.
	// If the result is -1, the tree is unbalanced.
	return GetHeightIfBalanced(root) != -1;
}

// Private helper method that returns the height of the subtree
// or -1 if the subtree is unbalanced
private int GetHeightIfBalanced(TreeNode node) {
	// Base case: an empty subtree has height 0 and is balanced
	if (node == null) return 0;

	// Recursively check the height of the left subtree
	int leftHeight = GetHeightIfBalanced(node.left);
	// If left subtree is unbalanced, propagate -1 upward
	if (leftHeight == -1) return -1;

	// Recursively check the height of the right subtree
	int rightHeight = GetHeightIfBalanced(node.right);
	// If right subtree is unbalanced, propagate -1 upward
	if (rightHeight == -1) return -1;

	// Check the balance condition at the current node
	if (Math.Abs(leftHeight - rightHeight) > 1)
		return -1; // Current node is unbalanced

	// If balanced, return the height of the current subtree
	return Math.Max(leftHeight, rightHeight) + 1;
}
