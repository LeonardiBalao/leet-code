var canThreePartsEqualSum = function (arr) {
  const n = arr.length;

  // Need at least 3 elements to create 3 non-empty parts
  if (n < 3) return false;

  // Calculate total sum manually (more efficient than reduce)
  let totalSum = 0;
  for (const num of arr) totalSum += num;

  // If sum isn't divisible by 3, equal partition is impossible
  if (totalSum % 3 !== 0) return false;

  const targetSum = totalSum / 3; // Sum each partition must have
  let currentSum = 0; // Running sum for current partition
  let partitionsFound = 0; // Count of completed partitions

  // Find two partitions in single pass
  for (let i = 0; i < n - 1; i++) {
    // Stop at n-1 to leave ≥1 element for 3rd part
    currentSum += arr[i];

    // Found a valid partition boundary
    if (currentSum === targetSum) {
      partitionsFound++;

      // Two partitions found = success (3rd is guaranteed valid)
      if (partitionsFound === 2) return true;

      currentSum = 0; // Reset to start counting next partition
    }
  }

  // Couldn't find 2 valid partitions
  return false;
};
