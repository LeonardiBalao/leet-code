public class Solution {
    public ListNode GetIntersectionNode(ListNode headA, ListNode headB) {
        // Base case: if either list is empty, no intersection possible
        if (headA == null || headB == null) return null;

        // Initialize two pointers to traverse both lists
        ListNode pointerA = headA;
        ListNode pointerB = headB;

        // Two-pointer technique: traverse both lists simultaneously
        // When one pointer reaches the end, redirect it to the head of the other list
        // If the lists intersect, the pointers will meet at the intersection node after at most 2 passes
        while (pointerA != pointerB) {
            // When pointerA reaches end, switch to headB; otherwise move to next
            pointerA = (pointerA == null) ? headB : pointerA.next;
            // When pointerB reaches end, switch to headA; otherwise move to next
            pointerB = (pointerB == null) ? headA : pointerB.next;
        }

        // Return intersection node (or null if no intersection exists)
        return pointerA; // Can be null (no intersection) or the intersection node
    }
}