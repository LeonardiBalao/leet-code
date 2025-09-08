var moveZeroes = function (nums) {
  let n = nums.length;
  let left = 0;

  // Move non-zero elements to the front
  for (let right = 0; right < n; right++) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
  }

  // Fill the rest with zeros
  while (left < n) {
    nums[left] = 0;
    left++;
  }
};
