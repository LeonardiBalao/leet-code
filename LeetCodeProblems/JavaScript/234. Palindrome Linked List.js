var isPalindrome = function (head) {
  let fast = head;
  let slow = head;

  // Find middle of the list
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let curr = slow;
  let next = null;
  let newHead = null;

  // Reverse second half
  while (curr !== null) {
    next = curr.next;
    curr.next = newHead;
    newHead = curr;
    curr = next;
  }

  // Compare first and reversed second halves
  while (newHead !== null && head !== slow) {
    if (newHead.val !== head.val) {
      return false;
    }
    newHead = newHead.next;
    head = head.next;
  }

  return true;
};
