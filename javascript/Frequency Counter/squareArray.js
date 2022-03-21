
/* This is frequency counter pattern problem where we try to solve in linear time O(n)
    Two arrays are given we need to find whether square of all elements of first array is present in second array
    Note: Order of the squared element may not be in the same index as its root present in arr1

    arr1[1,2,3] arr2[1,9,4]  true
    arr1[2,1,3] arr2[1,2]    false
    arr1[1,2,3,2] arr2[1,9,4,5] false
    arr1[1,2,3,2] arr2[1,4,4,9] true
*/
function isSame(arr1, arr2) {

    if (arr1.length != arr2.length) {
        return false
    }

    frequencyCounter1 = {}
    frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }


    for (let key in frequencyCounter1) {

        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if (frequencyCounter1[key] != frequencyCounter2[key ** 2])
            return false
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

arr1 = [1, 2, 3, 2]
arr2 = [4, 9, 1, 4]

console.log(isSame(arr1, arr2))