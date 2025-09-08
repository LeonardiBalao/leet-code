function titleToNumber(columnTitle) {
  const n = columnTitle.length;
  let columnNumber = 0;

  let i = n - 1;
  while (i >= 0) {
    // Convert character to 1-based value (A=1, B=2, ..., Z=26)
    const charNumber = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    // Update column number for base-26 system
    columnNumber += charNumber * Math.pow(26, n - 1 - i);
    i--;
  }
  return columnNumber;
}
