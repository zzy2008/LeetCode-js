/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let dp = new Array(n).fill(0)
    for (let i = 1; i <= n; i++) {
        dp[i] = i
        for (let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
        }
    }
    return dp[n]
};


console.log(numSquares(12))
console.log(numSquares(13))