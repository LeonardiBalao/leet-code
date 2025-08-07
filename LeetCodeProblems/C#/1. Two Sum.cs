public int[] TwoSum(int[] nums, int target) {
    // Dictionary to store numbers and their indices for quick lookup
    Dictionary<int, int> complementMap = new Dictionary<int, int>();

    for (int i = 0; i < nums.Length; i++) {
        // Calculate the number needed to reach the target
        int complement = target - nums[i];

        // If the complement exists in the map, return the pair of indices
        if (complementMap.ContainsKey(complement)) {
            return new int[] { complementMap[complement], i };
        }

        // Otherwise, store the current number and its index
        complementMap[nums[i]] = i;
    }

    // Return an empty array if no valid pair is found
    return new int[0];
}
