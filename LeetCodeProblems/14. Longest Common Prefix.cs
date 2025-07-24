public class Solution {
    public string LongestCommonPrefix(string[] words) {
        // Edge case: if the array is empty, return an empty string
        if (words.Length == 0) return "";

        // Start by assuming the first word is the common prefix
        string commonPrefix = words[0];

        // Loop through each word in the array
        foreach (string word in words) {
            // While the current word does not start with the current prefix,
            // shorten the prefix by removing the last character
            while (!word.StartsWith(commonPrefix)) {
                // Remove the last character from the prefix
                commonPrefix = commonPrefix.Substring(0, commonPrefix.Length - 1);

                // If the prefix becomes empty, there is no common prefix
                if (commonPrefix == "") return "";
            }
        }

        // After checking all words, return the longest common prefix found
        return commonPrefix;
    }
}
