//Leetcode 202
//Hash Map

function isHappyNumber(n) {

    seen = {}

    while (n !== 1 && !seen[n]) {
        seen[n] = true
        n = sumOfSquares(n)
    }

    return n === 1 ? true : false
}

function sumOfSquares(num) {

    return num.toString().split('').reduce((sum, num) => sum + Math.pow(num, 2), 0)
}

console.log(isHappyNumber(19))