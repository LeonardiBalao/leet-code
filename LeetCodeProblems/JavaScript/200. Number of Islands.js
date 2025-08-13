function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const m = grid.length;
    const n = grid[0].length;
    let count = 0;

    // Helper function to sink the island using DFS
    function dfs(i, j) {
        // Check boundaries and if cell is land
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') return;

        grid[i][j] = '0'; // Mark as visited (sink)
        // Visit all 4 directions
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }

    // Traverse all cells in the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') { // Found an island
                count++;              // Increase island count
                dfs(i, j);            // Sink the whole island
            }
        }
    }

    return count;
}