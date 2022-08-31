/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function (root) {
    if (!root) return []
    let queue = []
    let res = []
    queue.push(root)
    while(queue.length) {
        node  = queue.shift()
        res = res.concat(node.val)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right) {
            queue.push(node.right)
        }
    }
    return res
};