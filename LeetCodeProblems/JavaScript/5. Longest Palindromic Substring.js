// Expand around Centers solution
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;

    let start = 0;      // Start index of longest palindrome found
    let maxLength = 1;  // Length of longest palindrome found

    // Helper function to expand around center and return length
    const expandAroundCenter = (left, right) => {
        // Expand while characters match and within bounds
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return length of palindrome found
        return right - left - 1;
    };

    // Check each possible center point
    for (let i = 0; i < s.length; i++) {
        // Case 1: Odd length palindromes (center is single character)
        const oddLength = expandAroundCenter(i, i);

        // Case 2: Even length palindromes (center is between two characters)
        const evenLength = expandAroundCenter(i, i + 1);

        // Get the longer palindrome from both cases
        const currentMaxLength = Math.max(oddLength, evenLength);

        // Update global maximum if we found a longer palindrome
        if (currentMaxLength > maxLength) {
            maxLength = currentMaxLength;
            // Calculate start index: center - (length-1)/2
            const radius = Math.floor((currentMaxLength - 1) / 2);
            start = i - radius;
        }
    }

    // Return the longest palindromic substring
    return s.substring(start, start + maxLength);
};

// Brute Force Approach
var longestPalindrome = function (s) {
    // Helper function to check if a string is a palindrome
    const isPalindrome = (str) => {
        let left = 0, right = str.length - 1;

        // Compare characters from both ends moving inward
        while (left < right) {
            if (str[left] !== str[right]) return false;  // Mismatch found
            left++;
            right--;
        }
        return true;  // All characters matched
    };

    let longest = "";  // Track the longest palindrome found

    // Check every possible substring (brute force approach)
    for (let start = 0; start < s.length; start++) {
        for (let end = start; end < s.length; end++) {
            const substring = s.substring(start, end + 1);  // Extract substring

            // If it's a palindrome and longer than current longest
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;  // Update longest palindrome
            }
        }
    }

    return longest;  // Return the longest
};


