var addDigits = function (num) {
    let sum = 0;
    
    while (num > 9) { // Continue until num is a single digit
        sum = 0; // Reset sum for each iteration
        while (num > 0) { // Sum digits of num
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum; // Set num to sum for next iteration
    }
    
    return num; // Return single-digit result
};