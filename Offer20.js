/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function (s) {
    return /^\s*(\+|\-)?(\d+(\.\d*)?|\.\d+)((e|E)(\+|\-)?\d+)?\s*$/.test(s)
};