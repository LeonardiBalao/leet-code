var removeElements = function (head, val) {
  let dummy = new ListNode(0); // Create dummy node to simplify head removals
  dummy.next = head;
  let current = dummy; // Start at dummy node

  while (current.next) {
    // Process until no next node
    if (current.next.val === val) {
      // If next node has val, skip it
      current.next = current.next.next;
    } else {
      // Keep node, move to next
      current = current.next;
    }
  }
  return dummy.next; // Return modified list head
};
