public int RemoveDuplicates(int[] nums) {
    // Edge case: if the array is empty, return 0
    if (nums.Length == 0) return 0;

    // 'uniqueIndex' points to the position where the next unique element should be placed
    int uniqueIndex = 1;

    // Start from the second element and iterate through the array
    for (int currentIndex = 1; currentIndex < nums.Length; currentIndex++) {
        // If the current element is different from the last unique element
        if (nums[currentIndex] != nums[uniqueIndex - 1]) {
            // Place the unique element at the 'uniqueIndex' position
            nums[uniqueIndex] = nums[currentIndex];
            uniqueIndex++; // Move the index forward for the next unique element
        }
    }

    // Return the count of unique elements
    return uniqueIndex;
}
