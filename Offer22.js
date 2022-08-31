/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function (head, k) {
    // let p = head
    // let len = 0
    // while (p) {
    //     p = p.next
    //     len++
    // }
    // let s = len - k
    // for (let i = 0; i < s; i++) {
    //     head = head.next
    // }
    // return head
    let slow = head
    let fast = head
    for (let i = 0; i < k; i++) {
        fast = fast.next
    }
    while (fast !== null) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};