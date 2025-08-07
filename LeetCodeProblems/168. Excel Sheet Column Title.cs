public class Solution {
    // This method converts a given column number (like in Excel) to its corresponding column title.
    public string ConvertToTitle(int columnNumber) {
        string result = "";

        // Loop until the entire number is converted
        while (columnNumber > 0) {
            columnNumber--; // Adjust for 1-based indexing (Excel columns start at 1, not 0)

            // Get the remainder when divided by 26 to find the current letter
            int remainder = columnNumber % 26;

            // Convert the remainder to a character (0 -> 'A', 1 -> 'B', ..., 25 -> 'Z')
            char letter = (char)(remainder + 'A');

            // Prepend the character to the result string
            result = letter + result;

            // Move to the next digit (like carrying over in base conversion)
            columnNumber /= 26;
        }

        // Return the final column title
        return result;
    }
}
