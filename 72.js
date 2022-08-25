/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length
    const n = word2.length
    let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0))
    console.log(dp)
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i - 1][j - 1] + (word1[i - 1] == word2[j - 1] ? 0 : 1), dp[i][j - 1] + 1)
        }
    }
    return dp[m][n]
};


console.log(minDistance("intention", "execution"))

// word1[i - 1] === word2[j - 1] dp[i][j] = dp[i - 1][j - 1]

// word1[i - 1] !== word2[j - 1]
//     word1 delete dp[i][j] = dp[i - 1][j] + 1
//     word1 change dp[i][j] = dp[i - 1][j - 1] + 1
//     word1 insert dp[i][j] = dp[i][j - 1] + 1
// dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i - 1][j - 1] + 1, dp[i][j - 1] + 1)