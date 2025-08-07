public int RemoveElement(int[] nums, int val) {
	// 'writeIndex' keeps track of the position to write the next valid (non-val) element.
	int writeIndex = 0;

	// Loop through each element in the array using 'readIndex'
	for (int readIndex = 0; readIndex < nums.Length; readIndex++) {
		// If the current element is NOT equal to the value we want to remove
		if (nums[readIndex] != val) {
			// Copy the current element to the 'writeIndex' position
			nums[writeIndex] = nums[readIndex];

			// Move 'writeIndex' forward to prepare for the next valid element
			writeIndex++;
		}
		// If nums[readIndex] == val, we skip it (do not copy it)
	}

	// After the loop, 'writeIndex' is the count of elements not equal to 'val'
	return writeIndex;
}
