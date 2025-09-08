var spiralOrder = function (matrix) {
  const result = [];
  if (!matrix.length || !matrix[0].length) return result;

  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  // Traverse the matrix layer by layer
  while (top <= bottom && left <= right) {
    // Traverse from left to right along the top row
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // Traverse from top to bottom along the right column
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    // Traverse from right to left along the bottom row, if still within bounds
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    // Traverse from bottom to top along the left column, if still within bounds
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }

  return result;
};
