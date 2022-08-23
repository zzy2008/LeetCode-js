/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var reversePrint = function (head) {
    if (head == null) {
        return []
    }
    let arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse()
};

