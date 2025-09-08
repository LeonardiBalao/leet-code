var isStrobogrammatic = function (num) {
  // Map of digits to their rotated counterparts
  const rotatedDigits = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let left = 0;
  let right = num.length - 1;

  // Compare digits from both ends
  while (left <= right) {
    const leftChar = num[left];
    const rightChar = num[right];

    // Check if digit is valid and matches its rotated pair
    if (!(leftChar in rotatedDigits) || rotatedDigits[leftChar] !== rightChar) {
      return false;
    }

    left++;
    right--;
  }

  // All digit pairs are valid
  return true;
};
