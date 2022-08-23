/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    if (!numbers) return null
    let min = numbers[0]
    for (num of numbers.reverse()) {
        if (num <= min) {
            min = num
        }
        else if (num > min) {
            return min
        }
    }
    return min
};

console.log(minArray([3, 4, 5, 1, 2]))

0 1 1 2 3
1 2 3 0 1