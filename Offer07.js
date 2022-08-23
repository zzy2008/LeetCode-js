/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length == 0 || inorder.length == 0) {
        return null
    }
    const rootIndex = inorder.findIndex(i => i == preorder[0])
    const left = inorder.slice(0, rootIndex)
    const right = inorder.slice(rootIndex + 1)
    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1, rootIndex + 1), left),
        right: buildTree(preorder.slice(rootIndex + 1), right)
    }
};

