// Problem: Select maximum number of non-overlapping activities
// Activities have start and end times

function activitySelection(activities) {
    // Greedy choice: Always pick activity that ends earliest
    activities.sort((a, b) => a.end - b.end);
    
    const selected = [activities[0]];
    let lastEnd = activities[0].end;
    
    for (let i = 1; i < activities.length; i++) {
        // If activity starts after last one ends, select it
        if (activities[i].start >= lastEnd) {
            selected.push(activities[i]);
            lastEnd = activities[i].end;
        }
    }
    
    return selected;
}