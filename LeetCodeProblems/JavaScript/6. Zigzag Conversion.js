function convert(s, numRows) {
    // Handle edge cases: single row or string length <= 1
    if (numRows === 1 || s.length <= 1) return s;
    
    // Initialize array to store characters for each row
    const rows = new Array(numRows).fill('');
    let currentRow = 0; // Track current row
    let step = 1; // 1 for moving down, -1 for moving up
    
    // Iterate through each character in string
    for (let char of s) {
        // Add character to current row
        rows[currentRow] += char;
        
        // Change direction if we hit top or bottom row
        if (currentRow === 0) step = 1; // Reached top, go down
        else if (currentRow === numRows - 1) step = -1; // Reached bottom, go up
        
        // Move to next row
        currentRow += step;
    }
    
    // Combine all rows into final string
    return rows.join('');
}