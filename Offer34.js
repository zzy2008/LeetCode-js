/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function (root, target) {
    let res = []
    if (!root) return res
    let dfs = function (node, target, paths) {
        paths.push(node.val)
        if (!node.left && !node.right && node.val === target) {
            res.push(paths)
            return
        }
        if (node.left) {
            dfs(node.left, target - node.val, paths.slice())
        }
        if (node.right) {
            dfs(node.right, target - node.val, paths.slice())
        }
    }
    dfs(root, target, [])
    return res
};