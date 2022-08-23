/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
    if (n <= 3) return n - 1
    let b = n % 3
    let a = Math.floor(n / 3)

    if (b == 0) { return 3 ** a }
    else if (b == 1) { return 3 ** (a - 1) * 2 * 2 }
    else { return 3 ** a * b }
};

/*
        dp五部曲:
        1.状态定义:dp[i]为长度为i的绳子剪成m段最大乘积为dp[i]
        2.状态转移:dp[i]有两种途径可以转移得到
            2.1 由前一个dp[j]*(i-j)得到,即前面剪了>=2段,后面再剪一段,此时的乘积个数>=3个
            2.2 前面单独成一段,后面剩下的单独成一段,乘积为j*(i-j),乘积个数为2
            两种情况中取大的值作为dp[i]的值,同时应该遍历所有j,j∈[1,i-1],取最大值
        3.初始化:初始化dp[1]=1即可
        4.遍历顺序:显然为正序遍历
        5.返回坐标:返回dp[n]
        */
var cuttingRope = function (n) {
    let dp = new Array(n + 1).fill(1)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i - 1; j++) {
            let temp = Math.max(dp[j] * (i - j), j * (i - j))
            dp[i] = Math.max(dp[i], temp)
        }
    }
    return dp[n]
};
console.log(cuttingRope(10))