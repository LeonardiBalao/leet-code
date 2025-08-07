public int LengthOfLastWord(string input) {
    // Return 0 if the input is null, empty, or contains only whitespace
    if (string.IsNullOrWhiteSpace(input)) return 0;

    // Trim leading and trailing spaces
    string[] words = input.Trim().Split(' ');
    int n = words.Length;

    // Return the length of the last word in the array
    return words[n - 1].Length;
}
