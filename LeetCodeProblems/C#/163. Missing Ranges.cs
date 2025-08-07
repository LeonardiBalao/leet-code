public class Solution {
    public IList<IList<int>> FindMissingRanges(int[] nums, int lower, int upper) {
        var result = new List<IList<int>>();

        // Use long to avoid integer overflow when lower is int.MinValue
        // Start prev at lower-1 to simplify gap detection logic
        long prev = (long)lower - 1;

        // Iterate through nums and one extra step to handle the upper boundary
        for (int i = 0; i <= nums.Length; i++) {
            // Current value: use nums[i] if within array, otherwise upper+1 for final check
            long curr = (i < nums.Length) ? nums[i] : (long)upper + 1;

            // Check if there's a gap between previous and current values
            if (curr - prev > 1) {
                // Found missing range: add [prev + 1, curr - 1] to result
                result.Add(new List<int> { (int)(prev + 1), (int)(curr - 1) });
            }

            // Update previous value for next iteration
            prev = curr;
        }

        return result;
    }
}