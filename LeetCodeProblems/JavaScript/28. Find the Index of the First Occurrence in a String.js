function strStr(haystack, needle) {
    // If needle is empty, return 0
    if (needle.length === 0) return 0;
    
    // If needle is longer than haystack, it can't be found
    if (needle.length > haystack.length) return -1;
    
    let i = 0;
    while (i <= haystack.length - needle.length) {
        let match = true;
        let j = 0;
        while (j < needle.length) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
            j++;
        }
        // If all characters match, return the starting index
        if (match) return i;
        i++;
    }
    
    // If no match is found, return -1
    return -1;
}