/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function (currentState) {
  const ans = [];
  // No moves possible if length < 2
  if (currentState.length < 2) return ans;

  // Convert string to array for easier manipulation
  const stateArray = currentState.split("");

  // Check each pair of adjacent characters
  for (let i = 0; i < currentState.length - 1; i++) {
    if (currentState[i] === "+" && currentState[i + 1] === "+") {
      // Create a copy of the state array for this move
      const newState = [...stateArray];
      newState[i] = newState[i + 1] = "-";
      // Add the new state to the result
      ans.push(newState.join(""));
    }
  }

  return ans;
};
