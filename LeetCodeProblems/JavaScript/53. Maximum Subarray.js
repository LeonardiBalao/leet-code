// Kadane's Algorithm

var maxSubArray = function (nums) {
  // Initialize maxSum and currentSum to the first element.
  let maxSum = nums[0];
  let currentSum = nums[0];

  // Iterate through the array starting from the second element.
  for (let i = 1; i < nums.length; i++) {
    // Decide whether to add nums[i] to current subarray or start a new subarray at nums[i].
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update maxSum if currentSum is greater.
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the largest sum found.
  return maxSum;
};
