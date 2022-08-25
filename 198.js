/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    // let dp = new Array(nums.length).fill(0)
    // dp[0] = nums[0]
    // dp[1] = Math.max(nums[0], nums[1])
    // for (let i = 2; i < nums.length; i++) {
    //     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    // }
    // return dp[nums.length - 1]

    //space compression
    const n = nums.length
    if (n === 1) return nums[0]
    if (n === 2) return Math.max(nums[0], nums[1])
    let p = nums[0], q = Math.max(nums[0], nums[1])
    for (let i = 2; i < n; i++) {
        r = Math.max(q, p + nums[i])
        p = q
        q = r
        console.log("p =  " + p)
        console.log("q =  " + q)
        console.log("r =  " + r)
    }
    return r
};

// console.log(rob([2, 7, 9, 3, 1]))
console.log(rob([0, 0]))