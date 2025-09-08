var shortestDistance = function (wordsDict, word1, word2) {
  let minDist = Infinity;
  let idx1 = -1;
  let idx2 = -1;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      idx1 = i;
      if (idx2 !== -1) {
        minDist = Math.min(minDist, Math.abs(idx1 - idx2));
      }
    } else if (wordsDict[i] === word2) {
      idx2 = i;
      if (idx1 !== -1) {
        minDist = Math.min(minDist, Math.abs(idx1 - idx2));
      }
    }
  }

  return minDist === Infinity ? -1 : minDist;
};
