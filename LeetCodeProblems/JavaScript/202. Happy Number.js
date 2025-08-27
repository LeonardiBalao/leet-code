var isHappy = function (n) {
    const seen = new Set(); // To detect cycles
    while (n !== 1) {
        if (seen.has(n)) {
            return false; // Cycle detected, not a happy number
        }
        seen.add(n);
        n = splitSquareSum(n);
    }
    return true; // Reached 1, happy number
};

var splitSquareSum = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10); // Use integer division
    }
    return sum;
};