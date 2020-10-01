function rotateString(A, B) {

    if (A.length != B.length)
        return false

    shiftCombo = A + A //this will contain all combinations of shift operations on A
    if (shiftCombo.includes(B)) {
        return true
    }
    else {
        return false
    }
}


A = "abcde"
B = "cdeab"
console.log(rotateString(A, B))
