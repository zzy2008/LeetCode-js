/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function (root) {
    let pre = Node()
    let dfs = function (cur) {
        if (!cur) return
        dfs(cur.left)
        if (pre) pre.right = cur
        else head = cur
        cur.left = pre
        pre = cur
        dfs(cur.right)
    }
    if (!root) return null
    dfs(root)
    head.left = pre
    pre.right = head
    return head
};