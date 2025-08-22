var minimumArea = function (grid) {
    // Get dimensions of the grid (rows and columns)
    const n = grid.length, // Number of rows
        m = grid[0].length; // Number of columns
    
    // Initialize boundaries for rectangle containing all 1s
    let min_i = n, // Minimum row index, initially set to max possible
        max_i = 0; // Maximum row index, initially set to min possible
    let min_j = m, // Minimum column index, initially set to max possible
        max_j = 0; // Maximum column index, initially set to min possible
    
    // Iterate through each cell in the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // Check if current cell contains a 1
            if (grid[i][j] === 1) {
                // Update minimum row index if current row is smaller
                min_i = Math.min(min_i, i);
                // Update maximum row index if current row is larger
                max_i = Math.max(max_i, i);
                // Update minimum column index if current column is smaller
                min_j = Math.min(min_j, j);
                // Update maximum column index if current column is larger
                max_j = Math.max(max_j, j);
            }
        }
    }
    
    // Calculate and return area of smallest rectangle
    // Add 1 to account for inclusive boundaries
    return (max_i - min_i + 1) * (max_j - min_j + 1);
};