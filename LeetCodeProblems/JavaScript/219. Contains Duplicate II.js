function containsNearbyDuplicate(nums, k) {
  const numMap = new Map();

  for (let j = 0; j < nums.length; j++) {
    // Check if current number exists in map
    if (numMap.has(nums[j])) {
      // Get the previous index of this number
      const i = numMap.get(nums[j]);
      // Check if indices are within k distance
      if (j - i <= k) {
        return true;
      }
    }
    // Update the most recent index of the current number
    numMap.set(nums[j], j);

    // Maintain window size by removing elements outside the window
    if (j >= k) {
      numMap.delete(nums[j - k]);
    }
  }

  return false;
}
