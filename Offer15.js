/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    console.log(n.toString(2))
    console.log(n.toString(2).split('').filter(i => i == '1'))
    return n.toString(2).split('').filter(i => i === '1').length
    // let res = 0
    // for (let i = 0; i < 32; i++) {
    //     if ((n & (1 << i)) !== 0) {
    //         res++
    //     }
    // }
    // return res
};

console.log(hammingWeight(11111111111111111111111111111101))