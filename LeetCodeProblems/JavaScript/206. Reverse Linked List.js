var reverseList = function (head) {
    let newHead = null;
    let curr = head;

    while (curr) {
        let nextTemp = curr.next; // Save next
        curr.next = newHead;         // Reverse current node's pointer
        newHead = curr;              // Move newHead and curr one step forward
        curr = nextTemp;
    }

    return newHead; // New head of the reversed list
};
