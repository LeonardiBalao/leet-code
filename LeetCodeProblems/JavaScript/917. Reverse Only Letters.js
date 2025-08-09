var reverseOnlyLetters = function (s) {
    let chars = s.split(''); // Convert to array
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Move left pointer until we find a letter
        if (!isValidLetter(chars[left])) {
            left++;
            continue;
        }
        
        // Move right pointer until we find a letter
        if (!isValidLetter(chars[right])) {
            right--;
            continue;
        }
        
        // Swap the letters with destructure on the left side of the temporary array on the right side
        [chars[left], chars[right]] = [chars[right], chars[left]];
        
        // Move both pointers
        left++;
        right--;
    }
    
    return chars.join(''); // Convert back to string
};

var isValidLetter = (c) => {
    return /^[a-zA-Z]$/.test(c);
};