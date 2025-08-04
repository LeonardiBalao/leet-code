/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

// Floyd’s Cycle Detection Algorithm

public class Solution {
    // This method checks if a linked list has a cycle.
    public bool HasCycle(ListNode head) {
        // If the list is empty or has only one node, it cannot have a cycle.
        if (head == null || head.next == null) return false;

        // Initialize two pointers: slow moves one step at a time, fast moves two steps.
        ListNode slow = head;
        ListNode fast = head;

        // Traverse the list with both pointers.
        while (fast != null && fast.next != null) {
            slow = slow.next;         // Move slow pointer one step forward.
            fast = fast.next.next;    // Move fast pointer two steps forward.

            // If slow and fast meet, a cycle exists in the list.
            if (slow == fast) {
                return true;
            }
        }

        // If we reach the end of the list, there is no cycle.
        return false;
    }
}