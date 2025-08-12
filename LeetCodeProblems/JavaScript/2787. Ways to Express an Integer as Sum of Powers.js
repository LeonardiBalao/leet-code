// Calculates the number of ways to sum up to 'n' using unique natural numbers raised to the power 'x'
var numberOfWays = function (n, x) {
    const MOD = 1e9 + 7; // Modulo to prevent integer overflow
    // Initialize DP table: dp[i][j] = ways to reach sum 'j' using numbers 1..i
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    dp[0][0] = 1; // Base case: one way to reach sum 0 with 0 numbers

    // Iterate over numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        const val = Math.pow(i, x); // Current number raised to power x
        // Iterate over all possible sum values
        for (let j = 0; j <= n; j++) {
            // Exclude current number
            dp[i][j] = dp[i - 1][j];
            // Include current number if sum allows
            if (j >= val) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - val]) % MOD;
            }
        }
    }
    return dp[n][n]; // Number of ways to reach sum n using numbers up to n
};