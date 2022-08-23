/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let p = 0, q = 0, r = 1
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        for (let i = 2; i <= n; i++) {
            p = q
            q = r
            r = (p + q) % 1000000007
        }
        return r
    };
}


console.log(fib(100))