/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function (pushed, popped) {
    let n = pushed.length
    let stack = []
    let j = 0
    for (let i = 0; i < n; i++) {
        stack.push(pushed[i])
        while (stack.length && stack[stack.length - 1] == popped[j]) {
            stack.pop()
            j++
        }

    }
    return !stack.length
};