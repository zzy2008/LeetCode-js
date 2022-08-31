/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function (root) {
    if (root == null) return true
    
    let exam = function (a, b) {
        if (!a || !b) return !a && !b
        if (a.val != b.val) return false
        return exam(a.left, b.right) && exam(a.right, b.left)
    }
    return exam(root.left, root.right)
};