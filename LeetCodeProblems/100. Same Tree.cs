// Method to check if two binary trees are identical
public bool IsSameTree(TreeNode p, TreeNode q) {
	// Base case: both nodes are null (trees are identical at this level)
	if (p == null && q == null) return true;

	// One node is null but the other isn't (trees are different)
	if (p == null || q == null) return false;

	// Both nodes exist but have different values (trees are different)
	if (p.val != q.val) return false;

	// Recursively check if left and right subtrees are identical
	return IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
}
