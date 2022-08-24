var maxProfit = function (prices) {
    let dp = new Array(2)
    dp[0] = 0
    dp[1] = -prices[0]
    for (let p of prices) {
        dp[0] = Math.max(dp[0], dp[1] + p)
        dp[1] = Math.max(dp[1], dp[0] - p)

    }
    return dp[0]
};