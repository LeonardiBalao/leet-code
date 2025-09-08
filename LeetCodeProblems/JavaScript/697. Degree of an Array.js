function findShortestSubArray(nums) {
  // Maps to track frequency, first occurrence, and last occurrence of each element
  const frequency = new Map();
  const firstIndex = new Map();
  const lastIndex = new Map();

  // Single pass to populate all maps
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Update frequency
    frequency.set(num, (frequency.get(num) || 0) + 1);

    // Set first occurrence (only if not already set)
    if (!firstIndex.has(num)) {
      firstIndex.set(num, i);
    }

    // Always update last occurrence
    lastIndex.set(num, i);
  }

  // Find the maximum frequency (degree of the array)
  const degree = Math.max(...frequency.values());

  let minLength = nums.length; // Initialize with maximum possible length

  // Check all elements that have the maximum frequency
  for (const [num, freq] of frequency) {
    if (freq === degree) {
      // Calculate subarray length from first to last occurrence
      const length = lastIndex.get(num) - firstIndex.get(num) + 1;
      minLength = Math.min(minLength, length);
    }
  }

  return minLength;
}
