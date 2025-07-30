// Method to check if a binary tree is symmetric (mirror image of itself)
public bool IsSymmetric(TreeNode root) {
	// A null tree is considered symmetric
	if (root == null) return true;
	// Check if left and right subtrees are mirrors of each other
	return IsMirror(root.left, root.right);
}

// Helper method to check if two subtrees are mirror images
private bool IsMirror(TreeNode t1, TreeNode t2) {
	// Base case: both nodes are null (symmetric at this level)
	if (t1 is null && t2 is null) return true;
	// One node is null, other isn't, or values don't match (not symmetric)
	if (t1 is null || t2 is null || t1.val != t2.val) return false;

	// Recursively check mirror properties: left of t1 with right of t2, and right of t1 with left of t2
	return IsMirror(t1.left, t2.right) && IsMirror(t1.right, t2.left);
}
