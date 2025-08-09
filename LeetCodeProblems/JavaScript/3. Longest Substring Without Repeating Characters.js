/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Handle edge case
    if (s.length === 0) return 0;
    
    const charMap = new Map();  // Store character -> last seen index
    let left = 0;               // Left pointer of sliding window
    let maxLength = 0;          // Track maximum substring length
    
    // Right pointer expands the window
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        // If character already exists in current window
        if (charMap.has(char) && charMap.get(char) >= left) {
            // Move left pointer to skip the duplicate
            left = charMap.get(char) + 1;
        }
        
        // Update character's last seen position
        charMap.set(char, right);
        
        // Calculate current window size and update max
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};