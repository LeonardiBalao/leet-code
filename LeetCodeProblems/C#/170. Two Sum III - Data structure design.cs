
public class TwoSum {
    // List to store all added numbers
    List<int> twoSum = new List<int>();

    // Flag to track whether the list is sorted
    bool isSorted = false;

    // Constructor
    public TwoSum() { }

    // Adds a number to the list and marks it as unsorted
    public void Add(int number) {
        twoSum.Add(number);
        isSorted = false;
    }

    // Finds if any two numbers sum up to the given value
    public bool Find(int value) {
        // Sort the list only if it's not already sorted
        if (!this.isSorted) {
            this.twoSum.Sort();
            isSorted = true;
        }

        // Use two-pointer technique to find the target sum
        int first = 0;
        int last = twoSum.Count - 1;

        while (first < last) {
            int sum = twoSum[first] + twoSum[last];

            if (sum < value)
                first++; // Move left pointer to increase sum
            else if (sum == value)
                return true; // Found a valid pair
            else
                last--; // Move right pointer to decrease sum
        }

        // No valid pair found
        return false;
    }
}
