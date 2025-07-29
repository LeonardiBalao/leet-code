public int MySqrt(int x) {
	// Handle base cases where the square root is the number itself
	if (x < 2) return x;

	// Initialize binary search boundaries
	int left = 1;
	int right = x / 2;
	int sqrtApproximation = 0;

	// Perform binary search to find the integer square root
	while (left <= right) {
		// Avoid overflow by calculating mid this way
		int mid = left + (right - left) / 2;

		// Use long to prevent overflow when squaring mid
		long square = (long)mid * mid;

		if (square == x) {
			// Perfect square found
			return mid;
		} else if (square < x) {
			// Mid is a possible answer, but try to find a larger one
			sqrtApproximation = mid;
			left = mid + 1;
		} else {
			// Mid is too large, try smaller values
			right = mid - 1;
		}
	}

	// Return the integer part of the square root
	return sqrtApproximation;
}
