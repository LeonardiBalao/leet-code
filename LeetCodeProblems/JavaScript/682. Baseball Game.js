var calPoints = function (operations) {
    let scores = []; // Track individual scores, not just sum

    for (let op of operations) {
        switch (op) {
            case "C":
                scores.pop(); // Remove last score
                break;
            case "D":
                scores.push(scores[scores.length - 1] * 2); // Double last score
                break;
            case "+":
                scores.push(scores[scores.length - 1] + scores[scores.length - 2]); // Sum of last two
                break;
            default:
                scores.push(parseInt(op)); // Add the number score
        }
    }

    // Return sum of all remaining scores
    return scores.reduce((sum, score) => sum + score, 0);
};