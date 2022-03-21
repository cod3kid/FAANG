function sumOfTwo(arr1, arr2, target) {

    lookUp = []
    for (let i = 0; i < arr1.length; i++) {
        diff = target - arr1[i]
        lookUp.push(diff)
    }

    for (let i = 0; i < arr2.length; i++) {
        if (lookUp.includes(arr2[i])) {
            return true
        }
    }

    return false
}

arr1 = [3, 4, 67, 12, 40]
arr2 = [6, 91, 32, 1, 35]
console.log(sumOfTwo(arr1, arr2, 97)) 