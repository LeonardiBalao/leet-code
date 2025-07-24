public class Solution {
    /// Determines whether a given integer is a palindrome.
    /// A palindrome reads the same backward as forward.
    /// <param name="number">The integer to check.</param>
    /// <returns>True if the number is a palindrome; otherwise, false.</returns>

    public bool IsPalindrome(int number) {
        // Negative numbers are not palindromes
        if (number < 0)
            return false;

        int reversed = 0;
        int original = number;

        // Reverse the digits of the number
        while (number > 0) {
            int lastDigit = number % 10;               // Get the last digit
            reversed = reversed * 10 + lastDigit;      // Append it to the reversed number
            number = number / 10;                      // Remove the last digit
        }

        // A number is a palindrome if it equals its reverse
        return reversed == original;
    }
}
