/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    // let dp = new Array(nums.length).fill(0)
    // dp[0] = nums[0]
    // let max = dp[0]
    // for (let i = 1; i < nums.length; i++) {
    //     dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    //     max = Math.max(dp[i], max)
    // }
    // return max

    //compression
    let dp = new Array(2).fill(2)
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i - 1] + nums[i])
        max = Math.max(nums[i], max)
    }
    return max
};