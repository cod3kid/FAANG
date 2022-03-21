// LeetCode #657  Easy

function robotReturnToOrigin(path) {

    let row = 0
    let col = 0
    for (i in path) {
        if (path[i] == "U") {
            row -= 1
        } else if (path[i] == "D") {
            row += 1
        }
        else if (path[i] == "R") {
            col += 1
        }
        else if (path[i] == "L") {
            col -= 1
        }
    }

    if (row == 0 && col == 0) {
        return true
    }

    return false
}

path = "UD"
console.log(robotReturnToOrigin(path))