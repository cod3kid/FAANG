
function pivotFunction(arr, start = 0, end = arr.length - 1) {
    pivot = arr[start]
    swapId = start

    for (i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapId++
            let temp = arr[i]
            arr[i] = arr[swapId]
            arr[swapId] = temp
        }

    }
    let temp = arr[start]
    arr[start] = arr[swapId]
    arr[swapId] = temp

    return swapId

}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotFunction(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}
arr = [4, 1, 3, 2, 8]
console.log(quickSort(arr))
