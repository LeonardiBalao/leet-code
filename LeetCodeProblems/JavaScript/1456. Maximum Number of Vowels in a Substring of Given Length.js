var maxVowels = function (s, k) {
    if (k > s.length) return 0; // Handle edge case where k is larger than the string length

    let maxCount = 0;
    let count = 0;
    let set = new Set(["a", "i", "o", "u", "e"]);

    // Initialize the count for the first window
    for (let i = 0; i < k; i++) {
        if (set.has(s[i])) {
            count++;
        }
    }
    maxCount = count;
    if (count === k) return k; // Early termination if all are vowels

    // Slide the window across the string
    for (let i = k; i < s.length; i++) {
        count += set.has(s[i]) ? 1 : 0;
        count -= set.has(s[i - k]) ? 1 : 0;
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};