public class Solution {
	// List to store the postorder traversal result
	List<int> ans = new List<int>();

	public IList<int> PostorderTraversal(TreeNode root) {
		// Base case: if node is null, return empty list
		if (root == null) return [];

		// Recursively traverse left subtree
		PostorderTraversal(root.left);
		// Recursively traverse right subtree
		PostorderTraversal(root.right);
		// Add current node's value to result (after visiting children)
		ans.Add(root.val);

		return ans;
	}
}