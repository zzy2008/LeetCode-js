/**
 * @param {number[]} nums
 * @return {number}
 */
// var findRepeatNumber = function (nums) {
//     let map = {};
//     let ans = null;
//     for (let i = 0; i < nums.length; i++) {
//         let temp = nums[i];
//         if (map[temp] == undefined) {
//             map[temp] = 1;
//         }
//         else {
//             return temp;
//         }
//     }
// };

var findRepeatNumber = function (nums) {
    const map = new Map()
    for (const num of nums) {
        const temp = map.get(num)
        console.log(temp)
        if (map.has(num)) {
            return num
        }
        else {
            map.set(num, 1)
        }
    }
};
