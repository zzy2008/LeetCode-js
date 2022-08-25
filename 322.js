/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) return 0
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i - coin] + 1, dp[i])
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 11))