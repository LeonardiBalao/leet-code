var isPalindrome = function (x) {
  // Convert number to string
  const s = x.toString();
  // Get string length
  const n = s.length;
  // Set pointers for start and end
  let right = n - 1;
  let left = 0;

  // Compare characters from both ends
  while (left < right) {
    if (s[left] === s[right]) {
      // Move pointers inward
      right--;
      left++;
    } else {
      // Not a palindrome
      return false;
    }
  }
  // Is a palindrome
  return true;
};
