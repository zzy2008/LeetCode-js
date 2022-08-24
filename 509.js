/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n <= 1) return n
    let p = 0, q = 1, r
    for (let i = 2; i <= n; i++) {
        r = p + q
        p = q
        q = r
    }
    return q
};

console.log(fib(4))