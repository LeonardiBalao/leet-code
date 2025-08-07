public bool IsPalindrome(string s) {
	int left = 0, right = s.Length - 1;
	while (left < right) {
		// Move left pointer to next alphanumeric
		while (left < right && !IsAlphaNum(s[left])) left++;
		// Move right pointer to previous alphanumeric
		while (left < right && !IsAlphaNum(s[right])) right--;

		if (left < right) {
			if (ToLowerAscii(s[left]) != ToLowerAscii(s[right])) return false;
			left++;
			right--;
		}
	}
	return true;
}

// Checks if a char is alphanumeric [0-9A-Za-z]
private bool IsAlphaNum(char c) {
	return (c >= '0' && c <= '9') ||
		   (c >= 'A' && c <= 'Z') ||
		   (c >= 'a' && c <= 'z');
}

// Converts ASCII letter to lowercase (faster than char.ToLower)
private char ToLowerAscii(char c) {
	if (c >= 'A' && c <= 'Z')
		return (char)(c + 32);
	return c;
}
