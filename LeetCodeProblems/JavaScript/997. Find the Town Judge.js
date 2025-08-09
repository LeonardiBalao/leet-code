var findJudge = function (n, trust) {
    // Edge case: if n=1, person 1 is the judge (no trust relationships needed)
    if (n === 1) return 1;
    
    // Count incoming and outgoing trust relationships
    const trustCount = new Array(n + 1).fill(0); // trustCount[i] = net trust for person i
    
    for (const [a, b] of trust) {
        trustCount[a]--; // person a trusts someone (bad for being judge)
        trustCount[b]++; // person b is trusted by someone (good for being judge)
    }
    
    // Judge must be trusted by exactly n-1 people and trust nobody
    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1) {
            return i;
        }
    }
    
    return -1; // No judge found
};