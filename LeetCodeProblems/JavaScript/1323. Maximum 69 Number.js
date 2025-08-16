function maximum69Number(num) {
    // Handle edge case
    if (num === 0) return 0;

    // Step 1: Find the number of digits to get the highest power of 10
    let temp = num;
    let power = -1; // Will store the power of 10 for the most significant digit
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        power++;
    }

    // Step 2: Process digits from left to right
    temp = num;
    while (power >= 0) {
        // Get the digit at the current power of 10
        let digit = Math.floor(temp / Math.pow(10, power));
        if (digit === 6) {
            // Found the first 6, add 3 * 10^power to change it to 9
            return num + 3 * Math.pow(10, power);
        }
        // Remove the most significant digit
        temp = temp % Math.pow(10, power);
        power--;
    }

    // No 6 found, return original number
    return num;
}