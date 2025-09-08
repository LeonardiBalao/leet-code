function isIsomorphic(s, t) {
  // If lengths differ, they can't be isomorphic
  if (s.length !== t.length) return false;

  // Maps to store character mappings from s to t and vice versa
  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check if current mapping is consistent in both directions
    if (
      (mapST.has(charS) && mapST.get(charS) !== charT) ||
      (mapTS.has(charT) && mapTS.get(charT) !== charS)
    ) {
      return false; // Conflict in mapping
    }

    // Store the mapping
    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  // All characters mapped consistently
  return true;
}
