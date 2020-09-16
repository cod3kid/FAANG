

function mergeArrays(arr1, arr2) {

    result = []
    i = 0
    j = 0

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] >= arr2[j]) {
            result.push(arr2[j])
            j++
        }
        else {
            result.push(arr1[i])
            i++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    return result
}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    results = mergeArrays(left, right)

    return results
}

arr = [97, 2, 1, 34, 9, 74, 4]
console.log(mergeSort(arr))