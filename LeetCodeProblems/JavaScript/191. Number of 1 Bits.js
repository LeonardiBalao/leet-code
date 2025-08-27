var hammingWeight = function(n) {
    let count = 0;
    n = n >>> 0; // Convert to unsigned 32-bit integer
    while (n) {
        count += n & 1; // Check the least significant bit
        n >>= 1; // Right shift to check the next bit
    }
    return count;
};