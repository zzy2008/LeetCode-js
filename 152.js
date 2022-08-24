/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const dp = new Array(nums.length).fill().map(() => Array(2))
    let res = nums[0]
    dp[0][0] = nums[0]
    dp[0][1] = nums[0]
    let temp1 = 0, temp2 = 0
    for (let i = 1; i < nums.length; i++) {
        temp1 = dp[i - 1][0] * nums[i]
        temp2 = dp[i - 1][1] * nums[i]
        dp[i][0] = Math.min(temp1, temp2, nums[i])
        dp[i][1] = Math.max(temp1, temp2, nums[i])
        res = Math.max(res, dp[i][1])
    }
    return res
};


console.log(maxProduct([2, 3, -2, 4]))