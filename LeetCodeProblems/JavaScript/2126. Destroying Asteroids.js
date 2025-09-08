// Counting sort approach
const asteroidsDestroyed = function (mass, asteroids) {
  // Find the largest asteroid value to determine array size
  const max = Math.max(...asteroids);

  // Create counting array to store frequency of each asteroid mass
  const count = new Array(max + 1).fill(0);

  // Count occurrences of each asteroid mass value
  for (const asteroid of asteroids) {
    count[asteroid]++;
  }

  // Process asteroids in ascending order (smallest to largest)
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      // If current asteroid mass > our mass, we can't destroy it
      if (i > mass) return false;

      // Add mass from all asteroids of this size
      mass += i * count[i];
    }
  }

  // Successfully destroyed all asteroids
  return true;
};

// Greedy solution
var asteroidsDestroyedGreedy = function (mass, asteroids) {
  asteroids.sort((a, b) => a - b);
  if (asteroids[0] > mass) return false;

  for (const asteroid of asteroids) {
    if (asteroid > mass) return false;

    mass += asteroid;
  }
  return true;
};
