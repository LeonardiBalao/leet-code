
function minEatingSpeed(piles, h) {
    let left = 1; // Minimum possible speed
    let right = Math.max(...piles); // Maximum possible speed

    // Helper to check if Koko can eat all bananas at given speed within h hours
    const canEatAll = (speed) => {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / speed); // Time to eat each pile
        }
        return hours <= h;
    };

    // Binary search for the minimum valid speed
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            right = mid; // Try slower speed
        } else {
            left = mid + 1; // Need faster speed
        }
    }

    return left; // Minimum speed that works
}
