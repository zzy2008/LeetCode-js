/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function (arr, k) {
    if (!arr || k === 0) return []
    let sorted = arr.map(Number).sort((a, b) => a - b)
    // console.log(sorted)
    return sorted.slice(0, k)
};