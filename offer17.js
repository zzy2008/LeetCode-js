/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
    // let t = [...new Array(Math.pow(10, n)).keys()]
    // t.shift()
    // return t

    return Array.from({ length: Math.pow(10, n) - 1 }, (v, k) => k + 1)
};

console.log(printNumbers(3))