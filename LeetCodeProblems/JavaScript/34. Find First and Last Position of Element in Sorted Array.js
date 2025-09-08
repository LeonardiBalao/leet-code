function searchRange(nums, target) {
  // Helper function to find index of first or last occurrence using binary search
  function findIndex(isFirst) {
    let left = 0,
      right = nums.length - 1,
      idx = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1; // target is in the right half
      } else if (nums[mid] > target) {
        right = mid - 1; // target is in the left half
      } else {
        idx = mid; // found target
        // Move towards left (for first) or right (for last) to find boundary
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return idx;
  }
  // Return first and last position as an array
  return [findIndex(true), findIndex(false)];
}
