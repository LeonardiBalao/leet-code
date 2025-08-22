var addTwoNumbers = function (l1, l2) {
    // Initialize a dummy head for the result linked list
    const head = new ListNode(0);
    let current = head;
    let carry = 0; // To handle carry-over in addition

    // Process both lists until both are exhausted and no carry remains
    while (l1 || l2 || carry) {
        // Get values from lists, use 0 if list is exhausted
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        // Calculate sum and new carry
        const sum = x + y + carry;
        carry = Math.floor(sum / 10); // Carry for next digit
        const digit = sum % 10; // Current digit

        // Create new node with the calculated digit
        current.next = new ListNode(digit);
        current = current.next;

        // Move to next nodes if available
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    // Return the head of the result list, skipping the dummy node
    return head.next;
};