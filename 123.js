/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let k = 2
    let dp = Array.from(new Array(prices.length), () => Array.from(new Array(k + 1), () => new Array(2).fill(0)))
    // dp[0][0][0] = 0
    // dp[0][0][1] = -Number.MAX_VALUE
    // dp[0][1][0] = -Number.MAX_VALUE
    // dp[0][1][1] = -prices[0]
    // dp[0][2][0] = -Number.MAX_VALUE
    // dp[0][2][1] = -prices[0]


    dp[0][0][0] = 0
    dp[0][0][1] = 0
    dp[0][1][0] = 0
    dp[0][1][1] = -prices[0]
    dp[0][2][0] = 0
    dp[0][2][1] = -prices[0]
    let res = 0
    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j <= k; j++) {
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
            res = Math.max(dp[i][j][0], res, dp[i][j][1])
        }
    }
    return res

};

var maxProfit = function (prices) {
    
};
