var canAttendMeetings = function (intervals) {
    // Return true if no intervals
    if (intervals.length === 0) return true;

    // Sort a copy of intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Check for overlap between consecutive intervals
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false; // Overlap found
        }
    }

    return true; // No overlaps found
};