/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function (nums) {
    let sList = nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('')
    return sList
};
