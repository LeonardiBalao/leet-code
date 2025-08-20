function countSquares(matrix) {
  // Get matrix dimensions
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Initialize DP array with one extra row and column for easier indexing
  const dp = Array(rows + 1)
    .fill()
    .map(() => Array(cols + 1).fill(0));

  // Track total number of squares
  let totalSquares = 0;

  // Iterate through each cell in the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Only process cells with 1
      if (matrix[i][j] === 1) {
        // Size of largest square ending at (i,j) is 1 plus the minimum of:
        // - dp[i][j+1]: square size above
        // - dp[i+1][j]: square size to the left
        // - dp[i][j]: square size diagonally above-left
        dp[i + 1][j + 1] = 1 + Math.min(
          dp[i][j + 1], // Above
          dp[i + 1][j], // Left
          dp[i][j] // Diagonal
        );
        // Add the number of squares ending at this cell (e.g., a 2x2 square adds 2)
        totalSquares += dp[i + 1][j + 1];
      }
    }
  }

  return totalSquares;
}