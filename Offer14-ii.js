/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n <= 3) return n - 1
    let b = n % 3
    let a = Math.floor(n / 3)

    const pow = (basic, exp) => {
        let result = 1;
        while (exp > 0) {
            result = (result * basic) % 1000000007;
            exp -= 1;
        }
        return result;
    };

    if (b == 0) { return pow(3, a) }
    else if (b == 1) { return pow(3, (a - 1)) * 2 * 2 % 1000000007}
    else { return pow(3, a) * b % 1000000007}
};