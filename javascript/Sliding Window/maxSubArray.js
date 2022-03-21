function maxSubArray(arr, num) {
    if (arr.lenth < num)
        return 0
    maxSum = 0
    tempSum = 0

    for (i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum

    for (i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num]
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
}


arr = [1, 4, 5, 4, 11, 2, 4, 20, 1, 1, 1]
console.log(maxSubArray(arr, 3))