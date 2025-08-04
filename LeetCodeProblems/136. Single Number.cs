public class Solution {
	// This method finds the element that appears only once in the array,
	// where every other element appears exactly twice.
	public int SingleNumber(int[] nums) {
		int result = 0;
		// Iterate through each number in the array
		foreach (int num in nums) {
			// XOR the current result with the current number.
			// Duplicate numbers cancel each other out, leaving the unique number.
			result ^= num;
		}
		// The result now contains the single number
		return result;
	}
}