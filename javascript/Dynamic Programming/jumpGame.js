//Leetcode 55 Medium
//DP

function jumpGame(arr) {
    let n = arr.length
    let can_reach = 0

    for (let i = 0; i <= can_reach; i++) {
        if (i == n - 1) {
            return true
        }

        can_reach = Math.max(can_reach, i + arr[i])
    }
    return false
}

arr = [2, 3, 1, 1, 4]
console.log(jumpGame(arr))
