
function toBinary(num) {
    output = ""

    if (num == 0) return 0
    while (num > 0) {
        if (num % 2 == 0) {
            output = "0" + output
        }
        else {
            output = "1" + output
        }

        num = Math.floor(num / 2)
    }
    return parseInt(output)
}


console.log(toBinary(7))