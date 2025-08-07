// Main method to convert sorted array to a height-balanced BST
public TreeNode SortedArrayToBST(int[] sortedArray) {
    return BuildBST(sortedArray, 0, sortedArray.Length - 1);
}

// Recursive helper method to build the BST
private TreeNode BuildBST(int[] array, int start, int end) {
    // Base case: no elements to process
    if (start > end) return null;

    // Choose the middle element to maintain balance
    int middleIndex = (start + end) / 2;

    // Create the root node with the middle element
    TreeNode root = new TreeNode(array[middleIndex]);

    // Recursively build the left and right subtrees
    root.left = BuildBST(array, start, middleIndex - 1);
    root.right = BuildBST(array, middleIndex + 1, end);

    return root;
}
