var countBits = function (n) {
  const ans = new Array(n + 1).fill(0); // Initialize array of size n+1 with zeros

  for (let i = 0; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1); // Use right shift and bitwise AND
  }

  return ans;
};
