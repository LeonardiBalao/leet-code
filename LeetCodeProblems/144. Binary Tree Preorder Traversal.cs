public class Solution {
    // This list stores the preorder traversal result.
    private List<int> ans = new List<int>();

    // Performs preorder traversal on a binary tree and returns the list of values.
    public IList<int> PreorderTraversal(TreeNode root) {
        // Base case: if the current node is null, return an empty list.
        if (root == null) return [];

        // Visit the root node and add its value to the list.
        ans.Add(root.val);
        // Recursively traverse the left subtree.
        PreorderTraversal(root.left);
        // Recursively traverse the right subtree.
        PreorderTraversal(root.right);

        // Return the resulting list.
        return ans;
    }
}