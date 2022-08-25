/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function (x, n) {
    return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n)
};
var quickMul = function (x, n) {
    if (n === 0) {
        return 1
    }
    let y = quickMul(x, Math.floor(n / 2))
    return n % 2 === 0 ? y * y : y * y * x
}