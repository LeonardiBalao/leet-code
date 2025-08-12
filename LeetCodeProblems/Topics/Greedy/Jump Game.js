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
