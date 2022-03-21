//LeetCode 217 Easy

function containsDuplicate(arr) {
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            return true
        }
    }

    return false
}

console.log(containsDuplicate([3, 4, 8, 9, 14, 6, 5]))
