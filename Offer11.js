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

var minArray = function (numbers) {
    let low = 0
    let high = numbers.length - 1
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2)
        if (numbers[pivot] < numbers[high]) {
            high = pivot
        }
        else if (numbers[pivot] > numbers[high]) {
            low = pivot
        }
        else {
            high -= 1
        }
    }
    return numbers[low]
};

// console.log(minArray([3, 4, 5, 1, 2]))
