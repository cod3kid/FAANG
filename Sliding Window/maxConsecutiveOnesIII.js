//Leetcode 1001
// Sliding Window Pattern


function maximumConsecutiveOnes(arr, k) {

    leftPointer = 0
    rightPointer = 0

    while (rightPointer < arr.length) {
        if (arr[rightPointer] == 0) {
            k--
        }

        if (k < 0) {
            if (arr[leftPointer] == 0) {
                k++
            }
            leftPointer++
        }
        rightPointer++
    }
    return rightPointer-leftPointer
}

arr = [1,1,1,0,0,0,1,1,1,1,0]
k=2
console.log(maximumConsecutiveOnes(arr,k))
