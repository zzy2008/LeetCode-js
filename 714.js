/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    const n = prices.length
    let dp = new Array(2)
    dp[0] = 0
    dp[1] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[0] = Math.max(dp[0], dp[1] + prices[i] - fee)
        dp[1] = Math.max(dp[1], dp[0] - prices[i])
    }
    return dp[0]
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))