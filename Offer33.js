/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function (postorder) {
    // if (postorder.length <= 2) return true
    // const root = postorder[postorder.length - 1]
    // const idx = postorder.findIndex(i => i > root)
    // const left = postorder.slice(0, idx)
    // const right = postorder.slice(idx, -1)
    // if (Math.min(root, ...right) !== root) {
    //     return false
    // }
    // return verifyPostorder(left) && verifyPostorder(right)
    let isPostorder = function (start, end) {
        if (start >= end) {
            return true
        }
        let now = start
        while (postorder[now] < postorder[end]) {
            now++
        }
        let mid = now
        while (postorder[now] > postorder[end]) {
            now++
        }
        return now === end && isPostorder(start, mid - 1) && isPostorder(mid, end - 1)
    }
    return isPostorder(0, postorder.length - 1)
};