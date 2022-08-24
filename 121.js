/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let tempMin = Number.MAX_VALUE
//     console.log(tempMin)
//     let res = 0
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < tempMin) {
//             tempMin = prices[i]
//         } else if (prices[i] - tempMin > res) {
//             res = prices[i] - tempMin
//         }
//     }
//     return res
// };

// var maxProfit = function (prices) {
//     let min = prices[0]
//     let max = 0
//     for (let p of prices) {
//         min = Math.min(min, p)
//         max = Math.max(max, p - min)
//     }
//     return max
// };

// var maxProfit = function (prices) {
//     let dp = Array.from(new Array(prices.length), () => new Array(2))
//     console.log(dp)
//     dp[0][0] = 0
//     dp[0][1] = -prices[0]
//     for (let i = 1; i < prices.length; i++) {
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
//         dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
//     }
//     return dp[prices.length - 1][0]
// };

var maxProfit = function (prices) {
    let dp = new Array(2)
    dp[0] = 0
    dp[1] = -prices[0]
    for (let p of prices) {
        dp[0] = Math.max(dp[0], dp[1] + p)
        dp[1] = Math.max(dp[1], -p)

    }
    return dp[0]
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))

console.log(Number.MIN_VALUE)