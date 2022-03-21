//LeetCode 371 Medium

function sumWithoutArithmeticOperator(a, b) {

    if (b == 0) {
        return a
    }

    partialSum = a ^ b //XOR Operator 
    carry = (a & b) << 1 //& AND Operator .  << is the Left Shift Operator

    return sumWithoutArithmeticOperator(partialSum, carry)
}

console.log(sumWithoutArithmeticOperator(5, 5))