/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function (head) {
    // if (head === null) return null
    // let cur = head, preHead = new Node(), temp = preHead, map = new Map()
    // while (cur) {
    //     temp.val = cur.val
    //     temp.next = cur.next ? new Node() : null
    //     map.set(cur, temp)
    //     temp = temp.next
    //     cur = cur.next
    // }
    // temp = preHead
    // while (head) {
    //     temp.random = head.random ? map.get(head.random) : null
    //     head = head.next
    //     temp = temp.next
    // }
    // return preHead

    let visited = new Map()

    let dfs = function(head) {
        if(!head) {
            return null
        }
        if(visited.has(head)) return visited.get(head)

        const copy = new Node(head.val)
        visited.set(head, copy)
        copy.next = dfs(head.next)
        copy.random = dfs(head.random)
        return copy
    }

    return dfs(head)
};