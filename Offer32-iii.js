/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    if (!root) return []
    let queue = []
    let res = []
    let dir = true
    queue.push(root)
    while (queue.length) {
        let levelList = []
        const curLevelSize = queue.length
        for (let i = 0; i < curLevelSize; i++) {
            const node = queue.shift()
            if (dir) {
                levelList.push(node.val)
            } else {
                levelList.unshift(node.val)
            }

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(levelList)
        dir = !dir
    }
    return res
};