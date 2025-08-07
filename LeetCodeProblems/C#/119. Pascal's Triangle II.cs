// Method to get a specific row of Pascal's Triangle by row index
public IList<int> GetRow(int rowIndex) {
    // Store all rows from 0 to rowIndex to build Pascal's Triangle
    List<IList<int>> ans = new List<IList<int>>();

    // Build Pascal's Triangle row by row from 0 to rowIndex
    for (int i = 0; i <= rowIndex; i++) {
        List<int> rowData = new List<int>();
        // First element of every row is always 1
        rowData.Add(1);

        // Calculate middle elements using previous row's adjacent elements
        for (int j = 1; j < i; j++) {
            IList<int> prevRow = ans[i - 1];
            // Each element is sum of two elements above it in previous row
            rowData.Add(prevRow[j - 1] + prevRow[j]);
        }

        // Add last element as 1 (except for row 0 which only has one element)
        if (i > 0) {
            rowData.Add(1);
        }

        // Add completed row to the triangle
        ans.Add(rowData);
    }

    // Return the requested row
    return ans[rowIndex];
}