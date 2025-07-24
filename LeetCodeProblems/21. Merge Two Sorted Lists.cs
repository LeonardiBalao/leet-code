/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        // Create a dummy node to serve as the starting point of the merged list.
        // This simplifies edge cases like inserting at the head.
        ListNode dummyHead = new ListNode(0);

        // 'current' will point to the last node in the merged list as we build it.
        ListNode current = dummyHead;

        // Traverse both lists until one is fully consumed
        while (list1 != null && list2 != null) {
            // Compare the current values of both lists
            if (list1.val <= list2.val) {
                // If list1's value is smaller or equal, append it to the merged list
                current.next = list1;
                list1 = list1.next; // Move to the next node in list1
            } else {
                // Otherwise, append list2's node
                current.next = list2;
                list2 = list2.next; // Move to the next node in list2
            }

            // Move the 'current' pointer forward
            current = current.next;
        }

        // At this point, at least one list is null.
        // Append the remaining nodes from the non-null list.
        current.next = list1 ?? list2;

        // Return the merged list, skipping the dummy head
        return dummyHead.next;
    }
}
