public class Solution {
    public int[] PlusOne(int[] digits) {
        int n = digits.Length;

        // Traverse the array from the last digit to the first
        for (int i = n - 1; i >= 0; i--) {
            // If the current digit is less than 9, just increment it and return
            if (digits[i] != 9) {
                digits[i]++;
                return digits;
            } else {
                // If the digit is 9, set it to 0 and continue to the next digit
                digits[i] = 0;
            }
        }

        // If all digits were 9, we need an extra digit at the beginning
        // Example: [9, 9, 9] becomes [1, 0, 0, 0]
        int[] result = new int[n + 1];
        result[0] = 1; // Set the first digit to 1, rest are already 0 by default
        return result;
    }
}
