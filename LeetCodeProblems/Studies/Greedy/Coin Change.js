// Problem: Make change for amount using fewest coins
// Coins: [25, 10, 5, 1] (quarters, dimes, nickels, pennies)

function makeChange(amount) {
    const coins = [25, 10, 5, 1];
    const result = [];
    
    for (const coin of coins) {
        // Greedy choice: Use as many of the largest coin as possible
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }
    
    return result;
}

// Example: amount = 67
// Step 1: Use 2 quarters (50) → remaining: 17
// Step 2: Use 1 dime (10) → remaining: 7  
// Step 3: Use 1 nickel (5) → remaining: 2
// Step 4: Use 2 pennies (2) → remaining: 0
// Result: [25, 25, 10, 5, 1, 1] ✅
