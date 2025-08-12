var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0; // Edge case: no elements, return 0

    // Store all numbers in a set for O(1) lookups
    const numSet = new Set(nums);
    let maxLength = 0;

    // Iterate over each unique number
    for (let num of numSet) {
        // Only start counting if it's the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let length = 1;

            // Count consecutive numbers upwards
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            // Update maxLength if longer sequence is found
            maxLength = Math.max(maxLength, length);
        }
    }

    // Return the length of the longest consecutive sequence
    return maxLength;
};