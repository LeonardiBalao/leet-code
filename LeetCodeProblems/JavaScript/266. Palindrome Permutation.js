/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const charCount = new Map(); // Track character frequencies

  // Count frequency of each character
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  let oddCount = 0; // Count characters with odd frequency
  for (const count of charCount.values()) {
    if (count % 2 !== 0) oddCount++;
    if (oddCount > 1) return false; // More than one odd count means no palindrome
  }

  return true; // At most one character has odd frequency
};
