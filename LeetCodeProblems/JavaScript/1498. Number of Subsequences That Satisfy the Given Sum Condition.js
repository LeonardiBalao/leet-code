/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1000000007;
    const n = nums.length;
    
    // Sort the array
    nums.sort((a, b) => a - b);
    
    // Precompute powers of 2
    const pow2 = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        pow2[i] = (pow2[i-1] * 2) % MOD;
    }
    
    let left = 0;
    let right = n - 1;
    let result = 0;
    
    // Use two pointers
    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            // All subsequences including nums[left] as min
            // and any subset of elements from left+1 to right
            result = (result + pow2[right - left]) % MOD;
            left++;
        } else {
            right--;
        }
    }
    
    return result;
};