var twoSum = function (nums, target) {
  // Map for number-index pairs
  const numMap = new Map();

  // Loop through array
  for (let i = 0; i < nums.length; i++) {
    // Find needed complement
    const complement = target - nums[i];

    // If complement exists, return indices
    if (numMap.has(complement)) {
      return [i, numMap.get(complement)];
    }

    // Store current number and index
    numMap.set(nums[i], i);
  }

  // No solution (not reached per problem)
  return [];
};
