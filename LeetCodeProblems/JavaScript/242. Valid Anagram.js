/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();

  // Build frequency map for s
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  // Decrement frequencies based on t
  for (let i = 0; i < t.length; i++) {
    if (!sMap.has(t[i]) || sMap.get(t[i]) === 0) {
      return false;
    }
    sMap.set(t[i], sMap.get(t[i]) - 1);
  }

  return true;
};
