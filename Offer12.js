/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

//solution1
var exist = function (board, word) {
    const m = board.length
    const n = board[0].length
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let visited = new Array(m)
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(n).fill(false)
    }

    let check = function (i, j, s, k) {
        if (board[i][j] != s.charAt(k)) {
            return false
        }
        else if (k == s.length - 1) {
            return true
        }
        visited[i][j] = true
        let result = false
        for (const [dx, dy] of directions) {
            let newi = i + dx
            let newj = j + dy
            if (newi >= 0 && newi < m && newj >= 0 && newj < n) {
                if (!visited[newi][newj]) {
                    const flag = check(newi, newj, s, k + 1)
                    if (flag) {
                        result = true
                        break
                    }
                }
            }
        }
        visited[i][j] = false
        return result
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let result = check(i, j, word, 0)
            if (result) {
                return true
            }
        }
    }
    return false

};

//solution2
var exist = function (board, word) {
    let m = board.length
    let n = board[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true
            }
        }
    }
    return false
};

var dfs = function (board, word, i, j, k) {
    let m = board.length
    let n = board[0].length
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k]) {
        return false
    }
    if (k == word.length - 1) {
        return true
    }
    board[i][j] = ''
    let res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1) || dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1)
    board[i][j] = word[k]
    return res
}