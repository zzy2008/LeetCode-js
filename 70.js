/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n
    let pre2 = 1, pre1 = 1, cur
    for (let i = 2; i <= n; i++) {
        cur = pre2 + pre1
        pre2 = pre1
        pre1 = cur
    }
    return cur
};

console.log(climbStairs(3))