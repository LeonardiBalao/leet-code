/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.map = new Map();
  this.left = 0; // Tracks the oldest index
  this.right = -1; // Tracks the latest index
  this.sum = 0; // Track running sum
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.right++;
  this.map.set(this.right, val); // Add new value
  this.sum += val; // Update sum

  // If window exceeds size, remove the oldest element
  if (this.map.size > this.size) {
    this.sum -= this.map.get(this.left); // Subtract oldest value
    this.map.delete(this.left); // Remove oldest key
    this.left++; // Move left pointer
  }

  return this.sum / this.map.size; // Return average
};
