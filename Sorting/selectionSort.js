
arr = [4, 5, 3, 1, 7, 9, 6, 20, 15]


function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        let swap = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = swap
    }

    return arr
}

console.log(selectionSort(arr))