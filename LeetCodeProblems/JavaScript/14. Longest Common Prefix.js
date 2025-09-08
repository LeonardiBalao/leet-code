var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  // Sort strings - common prefix will be between first and last
  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];

  let i = 0;
  // Find common prefix between first and last sorted strings
  while (i < first.length && i < last.length && first[i] === last[i]) {
    i++;
  }

  return first.substring(0, i);
};
