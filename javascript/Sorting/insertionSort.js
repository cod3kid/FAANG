function insertionSort(arr) {

    for (i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        console.log(currentVal)
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]

        }
        arr[j + 1] = currentVal
    }

    return arr
}


arr = [2, 1, 9, 74, 4]
console.log(insertionSort(arr))