function missingNumber(numbers) {
  const length = numbers.length;
  const expectedSum = (length * (length + 1)) / 2; // Sum of numbers from 0 to n
  const actualSum = numbers.reduce((sum, num) => sum + num, 0); // Sum of array elements
  return expectedSum - actualSum;
}
