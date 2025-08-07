// Public method to perform inorder traversal of a binary tree
using System.Collections.Generic;

public IList<int> InorderTraversal(TreeNode root) {
    // Initialize result list to store traversal values
    List<int> result = new List<int>();
    // Start recursive traversal from root
    InorderHelper(root, result);
    return result;
}

// Helper method for recursive inorder traversal
private void InorderHelper(TreeNode node, List<int> result) {
    // Base case: if node is null, return
    if (node == null) return;

    // Recursively traverse left subtree first
    InorderHelper(node.left, result);
    // Visit current node by adding its value to result
    result.Add(node.val);
    // Recursively traverse right subtree last
    InorderHelper(node.right, result);
}