function findAnagrams(s, p) {
  const result = [];
  const pMap = new Map();
  const sMap = new Map();
  const pLen = p.length;
  const sLen = s.length;

  if (sLen < pLen) return result;

  // Build frequency map for p
  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }

  // Initialize the first window
  for (let i = 0; i < pLen; i++) {
    const char = s[i];
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }

  // Compare initial window
  if (mapsEqual(pMap, sMap)) result.push(0);

  // Slide the window
  for (let i = pLen; i < sLen; i++) {
    const newChar = s[i];
    const oldChar = s[i - pLen];

    // Add new character
    sMap.set(newChar, (sMap.get(newChar) || 0) + 1);

    // Remove old character
    if (sMap.get(oldChar) === 1) {
      sMap.delete(oldChar);
    } else {
      sMap.set(oldChar, sMap.get(oldChar) - 1);
    }

    // Compare maps
    if (mapsEqual(pMap, sMap)) result.push(i - pLen + 1);
  }

  return result;
}

// Helper function to compare two maps
function mapsEqual(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (map2.get(key) !== val) return false;
  }
  return true;
}
