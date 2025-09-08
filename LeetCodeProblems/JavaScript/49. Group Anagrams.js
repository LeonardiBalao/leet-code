/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  // Map to store sorted word as key and list of anagrams as value
  const map = new Map();

  for (const word of strs) {
    // Sort the word to get the canonical form for anagrams
    const sorted = word.split("").sort().join("");
    // Group words by their sorted canonical form
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }

  // Return grouped anagrams as an array of arrays
  return Array.from(map.values());
}
