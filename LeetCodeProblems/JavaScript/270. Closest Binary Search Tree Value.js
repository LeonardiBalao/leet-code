function closestValue(root, target) {
    let minDifference = Number.MAX_SAFE_INTEGER; // Track smallest difference
    let closestValue = root.val; // Initialize with root value

    function traverse(node) {
        if (!node) return; // Base case: null node

        const difference = Math.abs(target - node.val);
        
        if (difference < minDifference || (difference === minDifference && node.val < closestValue)) {
            minDifference = difference; // Update smallest difference
            closestValue = node.val; // Update closest value
        }

        // Optimize traversal for BST: only traverse relevant subtree
        if (node.val > target) {
            traverse(node.left); // Target is smaller, explore left subtree
        } else if (node.val < target) {
            traverse(node.right); // Target is larger, explore right subtree
        }
        // If node.val equals target, no need to traverse further
    }

    traverse(root);
    return closestValue;
}