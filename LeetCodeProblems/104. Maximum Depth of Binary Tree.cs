public int MaxDepth(TreeNode root) {
    // Base case: empty tree has depth 0
    if (root == null) return 0;

    // Recursively find max depth of left and right subtrees, then add 1 for current level
    return Math.Max(MaxDepth(root.left), MaxDepth(root.right)) + 1;
}