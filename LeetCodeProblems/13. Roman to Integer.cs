public int RomanToInt(string romanNumeral) {
    // Map of single Roman characters to their integer values
    Dictionary<char, int> romanToValue = new Dictionary<char, int> {
            { 'I', 1 },
            { 'V', 5 },
            { 'X', 10 },
            { 'L', 50 },
            { 'C', 100 },
            { 'D', 500 },
            { 'M', 1000 }
        };

    int total = 0; // Final result
    int previousValue = 0; // Value of the previous Roman numeral character

    // Iterate from right to left through the Roman numeral string
    for (int i = romanNumeral.Length - 1; i >= 0; i--) {
        int currentValue = romanToValue[romanNumeral[i]];

        // If the current value is less than the previous one, subtract it (e.g., IV = 5 - 1)
        if (currentValue < previousValue) {
            total -= currentValue;
        } else {
            // Otherwise, add it to the total
            total += currentValue;
        }

        // Update the previous value for the next iteration
        previousValue = currentValue;
    }

    return total; // Return the computed integer value
}
