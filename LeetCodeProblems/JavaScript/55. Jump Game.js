// Greedy, Optimal -  Function to determine if you can reach the last index starting from the first index
var canJump = function (nums) {
  // Initialize lastPos as the last index in the array
  let lastPos = nums.length - 1;
  // Iterate backwards through the array
  for (let i = nums.length - 1; i >= 0; i--) {
    // If you can jump from index i to lastPos or beyond,
    // update lastPos to the current index i
    if (i + nums[i] >= lastPos) {
      lastPos = i;
    }
  }
  // If lastPos is 0, it means we can reach the end from the start
  return lastPos === 0;
};

// Memoization array to store the state of each position
let memo;

// Helper function to determine if you can jump to the end from a given position
const canJumpFromPositionDP = (position, nums) => {
  // If we've already computed this position, return the memoized result
  if (memo[position] != "UNKNOWN") {
    // Return true if this position is marked "GOOD", false otherwise
    return memo[position] == "GOOD";
  }
  // Calculate the furthest index we can reach from the current position
  let furthestJump = Math.min(position + nums[position], nums.length - 1);
  // Try all possible next positions within the jump range
  for (
    let nextPosition = position + 1;
    nextPosition <= furthestJump;
    nextPosition++
  ) {
    // Recursively check if we can reach the end from the next position
    if (canJumpFromPosition(nextPosition, nums)) {
      // If yes, mark the current position as "GOOD" and return true
      memo[position] = "GOOD";
      return true;
    }
  }
  // If none of the jumps lead to the end, mark position as "BAD"
  memo[position] = "BAD";
  return false;
};

// Main function to check if we can jump from the start to the end of the array
var canJump = function (nums) {
  // Initialize memoization array with "UNKNOWN" state
  memo = new Array(nums.length).fill("UNKNOWN");
  // The last position is always "GOOD" (can reach the end from itself)
  memo[memo.length - 1] = "GOOD";
  // Start checking from position 0
  return canJumpFromPosition(0, nums);
};

// Timesout - Helper function to determine if you can jump to the end from a given position using backtracking
var canJumpFromPositionBacktrack = function (position, nums) {
  // Base case: if we've reached the last index, return true
  if (position == nums.length - 1) {
    return true;
  }
  // Calculate the furthest index we can jump to from the current position
  let furthestJump = Math.min(position + nums[position], nums.length - 1);
  // Try all possible jumps from the next position up to the furthest possible jump
  for (
    let nextPosition = position + 1;
    nextPosition <= furthestJump;
    nextPosition++
  ) {
    // Recursively check if it's possible to jump to the end from this next position
    if (canJumpFromPosition(nextPosition, nums)) {
      return true; // If any path leads to the end, return true
    }
  }
  // If none of the paths from this position lead to the end, return false
  return false;
};

// Main function: checks if you can jump from the start to the end of the array
var canJump = function (nums) {
  // Start backtracking from index 0
  return canJumpFromPosition(0, nums);
};
