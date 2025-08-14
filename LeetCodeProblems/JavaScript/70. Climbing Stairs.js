var climbStairs = function(n) {
    // Handle base cases
    if (n < 0) return 0; // Invalid input
    if (n <= 2) return n; // 1 stair -> 1 way, 2 stairs -> 2 ways

    let prev = 1; // Ways to reach step 1
    let curr = 2; // Ways to reach step 2

    // Iterate from step 3 to n
    for (let i = 3; i <= n; i++) {
        const next = prev + curr; // Ways to reach current step
        prev = curr; // Shift for next iteration
        curr = next;
    }

    return curr;
};