/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n == 0) return 1
    if (n == 1) return 1
    let p = 1, q = 1, r = 2
    for (let i = 3; i <= n; i++) {
        p = q
        q = r
        r = (p + q) % 1000000007
    }
    return r
};

console.log(numWays(7))