var reorderedPowerOf2 = function (n) {
  // Sort the digits of input number to create a pattern
  const inputPattern = n.toString().split("").sort().join("");

  // Check all powers of 2 up to 10^9 (2^29 is the largest within constraint)
  for (let power = 0; power < 30; power++) {
    const powerOf2 = Math.pow(2, power);

    // Sort the digits of this power of 2 to create a pattern
    const powerPattern = powerOf2.toString().split("").sort().join("");

    // If patterns match, we can rearrange input digits to form this power of 2
    if (inputPattern === powerPattern) {
      return true;
    }
  }

  // No matching power of 2 found
  return false;
};
