public int ClimbStairs(int n) {
    // If there's only 1 or 2 steps, return n directly
    if (n == 1) return 1; // Only one way to climb 1 step
    if (n == 2) return 2; // Two ways to climb 2 steps: (1+1) or (2)

    // Initialize the number of ways to reach the first two steps
    int waysToPreviousStep = 2; // Ways to reach step (n - 1)
    int waysToStepBeforePrevious = 1; // Ways to reach step (n - 2)

    // Variable to store the total number of ways to reach the current step
    int totalWays = 0;

    // Loop from step 3 up to step n
    for (int currentStep = 3; currentStep <= n; currentStep++) {
        // The number of ways to reach the current step is the sum of the ways
        // to reach the two previous steps
        totalWays = waysToPreviousStep + waysToStepBeforePrevious;

        // Update the previous steps for the next iteration
        waysToStepBeforePrevious = waysToPreviousStep;
        waysToPreviousStep = totalWays;
    }

    // Return the total number of ways to reach step n
    return totalWays;
}
