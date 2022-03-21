function buddyString(a, b) {
    //If length of both string aint equal  ,return false
    if (a.length != b.length) {
        return false
    }

    if (a === b && [...new Set(a)].length < a.length) {
        return true
    }

    //Push the different ith character into the array
    differences = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            differences.push(a[i], b[i])
        }
    }

    //check if there s only 2 differences and if they are same
    if (differences.length == 4 && differences[0] == differences[differences.length - 1] && differences[1] === differences[2]) {
        return true
    }

    return false

}


a = "aaab"
b = "aaba"
console.log(buddyString(a, b))

