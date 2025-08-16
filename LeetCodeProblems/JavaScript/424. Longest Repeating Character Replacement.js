function characterReplacement(s, k) {
    // Initialize frequency map to count characters in the window
    const freq = new Map();
    let maxLength = 0; // Track the maximum length of valid substring
    let maxCount = 0;  // Track the count of the most frequent character in current window
    let left = 0;      // Left pointer of sliding window
    
    // Iterate through the string using right pointer
    for (let right = 0; right < s.length; right++) {
        // Add current character to frequency map
        const char = s[right];
        freq.set(char, (freq.get(char) || 0) + 1);
        
        // Update maxCount if current character count is higher
        maxCount = Math.max(maxCount, freq.get(char));
        
        // Current window size is (right - left + 1)
        // Number of characters to replace = window size - count of most frequent char
        // If replacements needed > k, shrink the window
        if ((right - left + 1) - maxCount > k) {
            freq.set(s[left], freq.get(s[left]) - 1);
            left++;
        }
        
        // Update maxLength if current window is larger
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}