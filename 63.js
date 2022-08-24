/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    let dp = new Array(m).fill().map(() => Array(n).fill(0))
    console.log(dp)
    for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1
    }
    for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
        dp[0][j] = 1
    }

    console.log(dp)

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]))
console.log(uniquePathsWithObstacles([[1, 0]]))