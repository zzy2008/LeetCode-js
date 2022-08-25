/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = Array.from(new Array(m), () => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[0][0]
            }
            else if (i === 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j]
            }
            else if (j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
            }
            console.log(`${i}--${j}--${dp[i][j]}`)
        }
    }
    return dp[m - 1][n - 1]
};


var minPathSum = function (grid) {
    const m = grid.length
    const n = grid[0].length

    for (let i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0]
    }
    for (let j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1]
        console.log(grid[0][j])
    }
    console.log(grid)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
            console.log(`${i}--${j}--${grid[i][j]}`)
        }
    }
    return grid[m - 1][n - 1]
};