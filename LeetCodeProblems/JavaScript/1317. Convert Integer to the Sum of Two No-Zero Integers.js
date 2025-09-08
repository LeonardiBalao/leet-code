function getNoZeroIntegers(n) {
  function hasNoZero(num) {
    while (num > 0) {
      if (num % 10 === 0) {
        return false;
      }
      num = Math.floor(num / 10);
    }
    return true;
  }

  for (let i = 1; i < n; i++) {
    if (hasNoZero(i) && hasNoZero(n - i)) {
      return [i, n - i];
    }
  }
}
