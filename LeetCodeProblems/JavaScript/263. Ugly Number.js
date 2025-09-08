var isUgly = function (n) {
  if (n <= 0) return false; // Ugly numbers must be positive

  // Divide by 2, 3, 5 as long as possible
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;

  return n === 1; // True if n is reduced to 1
};
