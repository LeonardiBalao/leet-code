/**
 * Password Permutation Generator Exercise
 * 
 * Your task: Complete the function below to generate all possible permutations
 * of the given digits array.
 * 
 * Example:
 * Input: [1, 2, 3]
 * Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 */

function genNonZeroLeadingDigitsPerm(digits) {
    if (digits.length <= 1) return [digits];

    let result = [];

    for (let i = 0; i < digits.length; i++) {
        const curr = digits[i];
        const remaining = [...digits.slice(0, i), ...digits.slice(i + 1)];

        const perms = genNonZeroLeadingDigitsPerm(remaining);
        for (let perm of perms) {
            result.push([curr, ...perm]);
        }
    }

    result = result.filter(perm => perm[0] !== 0); // Remove leading zero cases

    return result;
}

// Test cases
console.log("Test 1 - Simple case:");
console.log(genNonZeroLeadingDigitsPerm([1, 2]));
// Expected: [[1,2], [2,1]]

console.log("\nTest 2 - Three digits:");
console.log(genNonZeroLeadingDigitsPerm([1, 2, 3]));
// Expected: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

console.log("\nTest 3 - Four digits:");
console.log(genNonZeroLeadingDigitsPerm([5, 7, 2, 9]));
// Expected: 24 different permutations

console.log("\nTest 4 - Edge case:");
console.log(genNonZeroLeadingDigitsPerm([4]));
// Expected: [[4]]

console.log("\nTest 5 - Leading Zero case:");
console.log(genNonZeroLeadingDigitsPerm([0, 3, 4, 4]));
// Expected: [[4]]

// Bonus: Convert permutations to actual numbers
function convertToNumbers(permutations) {
    return permutations.map(perm => parseInt(perm.join('')));
}

// Test the bonus function
console.log("\nBonus - Convert to numbers:");
const perms = genNonZeroLeadingDigitsPerm([1, 2, 3]);
console.log(convertToNumbers(perms));
// Expected: [123, 132, 213, 231, 312, 321]