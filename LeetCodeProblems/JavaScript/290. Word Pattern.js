var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const patternToWord = new Map();
  const usedWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (!patternToWord.has(char)) {
      if (usedWords.has(word)) return false; // Word already mapped to another char
      patternToWord.set(char, word);
      usedWords.add(word);
    } else if (patternToWord.get(char) !== word) {
      return false; // Char mapped to a different word
    }
  }

  return true;
};
