function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // Extract the i-th bit from n
    let bit = (n >> i) & 1;
    // Place the bit in the (31-i)-th position of result
    result |= bit << (31 - i);
  }
  // Convert to unsigned 32-bit integer
  return result >>> 0;
}
