/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (prices.length == 0) return 0
    let dp = Array.from(new Array(prices.length), () => Array.from(new Array(k + 1), () => new Array(2).fill(0)))
    for (let i = 0; i <= k; i++) {
        dp[0][i][1] = -prices[0]
    }



    let res = 0
    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j <= k; j++) {
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
            res = Math.max(dp[i][j][0], res)
        }
    }
    return res
};

var maxProfit = function (k, prices) {
    if (prices.length == 0) return 0
    let dp = Array.from(new Array(k + 1), () => new Array(2).fill(0))
    for (let i = 0; i <= k; i++) {
        dp[i][1] = -prices[0]
    }
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j <= k; j++) {
            dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i])
            dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i])
            res = Math.max(res, dp[j][0])
        }
    }
    return res
};