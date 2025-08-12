function greedyTemplate(input) {
    // 1. Sort input based on greedy criteria
    input.sort(greedyCriteria);
    
    let result = [];
    
    // 2. Make greedy choices
    for (const item of input) {
        // 3. Check if choice is valid
        if (isValidChoice(item, result)) {
            // 4. Make the greedy choice
            result.push(item);
        }
    }
    
    return result;
}
