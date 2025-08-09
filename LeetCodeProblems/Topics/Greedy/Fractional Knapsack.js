// Problem: Fill knapsack with items to maximize value
// Can take fractions of items

function fractionalKnapsack(items, capacity) {
    // Greedy choice: Pick items with highest value-to-weight ratio first
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let totalValue = 0;
    let remainingCapacity = capacity;

    for (const item of items) {
        if (item.weight <= remainingCapacity) {
            // Take whole item
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            // Take fraction of item
            const fraction = remainingCapacity / item.weight;
            totalValue += item.value * fraction;
            break;
        }
    }

    return totalValue;
}