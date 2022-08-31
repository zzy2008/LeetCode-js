/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function (nums) {
    let map = new Map()
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        }
        else {
            map.set(num, 1)
        }
    }
    console.log(map)
    for (const [key, value] of map) {
        if (value > Math.floor(nums.length / 2)) {
            return key
        }
    }
};