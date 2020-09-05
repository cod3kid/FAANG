/*
    Multiple Pointers Pattern
    Return first pair of elements whose sum is zero
    by using this approach we can do this in Linear Time O(n)
    You can use this login to find pairs whose sum is X
    
    Note: The array must be sorted inorder to do this

*/
function sumZero(sumArray) {
    left = 0
    right = sumArray.length - 1

    while (left < right) {
        sum = sumArray[left] + sumArray[right]
        if (sum == 0) {
            return [sumArray[left], sumArray[right]]
        }
        else if (sum > 0) {
            right--
        }
        else {
            left--
        }
    }
}

sumArr = [-3, -2, 1, 0, 1, 2, 3, 4, 7, 8, 9, 10, 100]
console.log(sumZero(sumArr))