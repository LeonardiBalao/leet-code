// Mathematical reasoning:
// - Maximum 32-bit signed integer: 2^31 - 1 = 2,147,483,647
// - Largest power of 3 that fits: 3^19 = 1,162,261,467
// - Since 3 is prime, the only divisors of 3^19 are: 3^0, 3^1, 3^2, ..., 3^19
// - Therefore, if n divides 3^19 evenly (remainder = 0), then n must be a power of 3
var isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n === 0;
};

var isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
};