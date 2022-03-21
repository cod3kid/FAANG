//LeetCode 125 Easy
function validPalindrome(str) {


    res = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/^[A-Za-z0-9]+$/)) {
            res += str[i]
        }
    }

    res=res.toLowerCase()
    rev = res.split("").reverse().join("")

    if (res == rev) {
        return true
    }
    return false
}

str = "na.ban"

console.log(validPalindrome(str))