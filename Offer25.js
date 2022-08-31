/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
    // let tl1 = l1
    // let tl2 = l2
    // let newHead = new ListNode(0)
    // let newTemp = newHead
    // if (!tl1) {
    //     return l2
    // }
    // if (!tl2) {
    //     return l1
    // }
    // while (tl1 && tl2) {
    //     if (tl1.val < tl2.val) {
    //         newTemp.next = tl1
    //         tl1 = tl1.next
    //         newTemp = newTemp.next
    //     } else {
    //         newTemp.next = tl2
    //         tl2 = tl2.next
    //         newTemp = newTemp.next
    //     }
    // }
    // newTemp.next = tl1 ? tl1 : tl2
    // return newHead.next

    if (l1 == null) {
        return l2
    } else if (l2 == null) {
        return l1
    }

    let mergedHead = new ListNode(0)
    if (l1.val <= l2.val) {
        mergedHead.val = l1.val
        mergedHead.next = mergeTwoLists(l1.next, l2)
    } else {
        mergedHead.val = l2.val
        mergedHead.next = mergeTwoLists(l1, l2.next)
    }
    return mergedHead
};