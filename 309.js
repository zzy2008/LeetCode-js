/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length <= 1) return 0
    let dp = Array.from(new Array(prices.length), () => new Array(3))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    dp[0][2] = 0

    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        dp[i][2] = dp[i - 1][1] + prices[i]

    }
    return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][2])
};

console.log(maxProfit([1, 2, 3, 0, 2]))
console.log(maxProfit([1]))