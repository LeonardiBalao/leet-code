function summaryRanges(nums) {
  const result = [];
  if (nums.length === 0) {
    return result;
  }

  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    // Check if right is the end of array or next number is not consecutive
    if (right === nums.length - 1 || nums[right + 1] !== nums[right] + 1) {
      // Form the range from left to right
      if (left === right) {
        result.push(nums[left] + "");
      } else {
        result.push(nums[left] + "->" + nums[right]);
      }
      // Move left to the next position after right
      left = right + 1;
    }
  }

  return result;
}
