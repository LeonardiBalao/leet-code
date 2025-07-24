// This method returns the index at which the target should be inserted in the sorted array.
public int SearchInsert(int[] sortedArray, int targetValue) {
	// Initialize the search boundaries
	int leftBoundary = 0;
	int rightBoundary = sortedArray.Length - 1;

	// Perform binary search
	while (leftBoundary <= rightBoundary) {
		// Calculate the middle index to avoid potential overflow
		int middleIndex = leftBoundary + (rightBoundary - leftBoundary) / 2;

		// If the target is found, return its index
		if (sortedArray[middleIndex] == targetValue) {
			return middleIndex;
		}
		// If the target is greater, ignore the left half
		else if (sortedArray[middleIndex] < targetValue) {
			leftBoundary = middleIndex + 1;
		}
		// If the target is smaller, ignore the right half
		else {
			rightBoundary = middleIndex - 1;
		}
	}

	// If the target is not found, 'leftBoundary' is the correct insert position
	return leftBoundary;
}
