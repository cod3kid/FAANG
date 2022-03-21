//LeetCode 69 Medium

function optimalSquareRoot(num) {

    result = 0
    low = 0
    high = num

    if (num == 0 || num == 1)
        return num

    while (low <= high) {
        mid = Math.floor((high + low) / 2)
        if (mid * mid == num) {
            return mid
        } else if (mid * mid < num) {
            low = mid + 1
            result = mid
        } else {
            high = mid - 1
        }
    }
    return result
}

console.log(optimalSquareRoot(8))