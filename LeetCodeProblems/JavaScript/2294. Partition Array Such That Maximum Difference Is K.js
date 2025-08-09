// Counting Sort + Greedy approach
var partitionArray = function(nums, k) {
    // Track which values exist in the input array (0-100000)
    const valueExists = new Uint8Array(100_001);
    let maxValue = 0;
    
    // Mark existing values and find maximum
    for(let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        valueExists[currentNum] = 1;
        if(currentNum > maxValue) maxValue = currentNum;
    }

    let partitionCount = 0;
    
    // Process values in ascending order
    for(let value = 0; value < maxValue + 1; value++) {
        // Skip values that don't exist in input
        if(valueExists[value] <= 0) continue;

        partitionCount++; // Start new partition
        value += k; // Skip k values to ensure next partition starts at minimum valid distance
    }

    return partitionCount;
};

// Greedy solution
var partitionArrayGreedy = function(nums, k) {
    // Sort array to group similar values
    nums.sort((a, b) => a - b);
    
    let ans = 1; // At least one subsequence needed
    let x = nums[0]; // Minimum of current subsequence
    
    for (let i = 1; i < nums.length; i++) {
        // If difference exceeds k, start new subsequence
        if (nums[i] - x > k) {
            x = nums[i]; // New minimum
            ans++; // Increment count
        }
    }
    
    return ans;
};