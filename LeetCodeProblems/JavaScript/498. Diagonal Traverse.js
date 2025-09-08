function findDiagonalOrder(matrix) {
  // Check for an empty matrix
  if (!matrix || !matrix[0]) {
    return [];
  }

  // The dimensions of the matrix
  const N = matrix.length;
  const M = matrix[0].length;

  // Indices that will help us progress through
  // the matrix, one element at a time.
  let row = 0;
  let column = 0;

  // Variable to keep track of direction (1 for up, 0 for down)
  let direction = 1;

  // Final result array that will contain all the elements
  // of the matrix
  const result = [];

  // The main loop to iterate over all elements in the array
  while (row < N && column < M) {
    // Add the current element to the result array
    result.push(matrix[row][column]);

    // Move along in the current diagonal depending upon
    // the current direction: [row, column] -> [row - 1, column + 1] if
    // going up and [row, column] -> [row + 1, column - 1] if going down
    const new_row = row + (direction === 1 ? -1 : 1);
    const new_column = column + (direction === 1 ? 1 : -1);

    // Check if the next element in the diagonal is within the
    // bounds of the matrix. If not, find the next head
    if (new_row < 0 || new_row === N || new_column < 0 || new_column === M) {
      // If the current diagonal was going upwards
      if (direction) {
        // For an upwards going diagonal having [row, column] as its tail
        // If [row, column + 1] is within bounds, it becomes the next head
        // Otherwise, [row + 1, column] becomes the next head
        row += column === M - 1 ? 1 : 0;
        column += column < M - 1 ? 1 : 0;
      } else {
        // For a downwards going diagonal having [row, column] as its tail
        // If [row + 1, column] is within bounds, it becomes the next head
        // Otherwise, [row, column + 1] becomes the next head
        column += row === N - 1 ? 1 : 0;
        row += row < N - 1 ? 1 : 0;
      }
      // Flip the direction
      direction = 1 - direction;
    } else {
      row = new_row;
      column = new_column;
    }
  }

  return result;
}
