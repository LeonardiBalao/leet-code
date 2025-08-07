public string AddBinary(string binaryA, string binaryB) {
    int indexA = binaryA.Length;
    int indexB = binaryB.Length;
    int carry = 0;

    // Allocate a char array large enough to hold the result (including possible carry)
    int maxLength = Math.Max(indexA, indexB) + 1;
    char[] result = new char[maxLength];
    int resultIndex = maxLength - 1;

    // Loop through both strings from right to left
    while (indexA > 0 || indexB > 0 || carry > 0) {
        int sum = carry;

        // Add bit from binaryA if available
        if (indexA > 0) {
            sum += binaryA[--indexA] - '0';
        }

        // Add bit from binaryB if available
        if (indexB > 0) {
            sum += binaryB[--indexB] - '0';
        }

        // Compute result bit and update carry
        result[resultIndex--] = (char)((sum % 2) + '0');
        carry = sum / 2;
    }

    // Return the result as a string, skipping any unused leading space
    return new string(result, resultIndex + 1, maxLength - resultIndex - 1);
}
