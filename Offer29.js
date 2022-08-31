/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
    if (matrix.length == 0) { return [] }
    let m = matrix.length
    let n = matrix[0].length
    let l = 0, r = n - 1, t = 0, b = m - 1
    let res = new Array(m * n)
    let index = 0
    while (true) {
        for (let i = l; i <= r; i++) {
            res[index++] = matrix[t][i]
        }
        t++
        if (t > b) break
        for (let i = t; i <= b; i++) {
            res[index++] = matrix[i][r]
        }
        r--
        if (l > r) break
        for (let i = r; i >= l; i--) {
            res[index++] = matrix[b][i]
        }
        b--
        if (t > b) break
        for (let i = b; i >= t; i--) {
            res[index++] = matrix[i][l]
        }
        l++
        if (l > r) break
    }
    return res
};
