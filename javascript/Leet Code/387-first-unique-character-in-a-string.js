//LeetCode 387 Easy
//Frequency Counter Problem (Use HashMap)
function firstNonRepeatingCharacter(str) {


    lookUp = {}
    for (i in str) {
        currentStr = str[i]
        if (currentStr in lookUp) {
            lookUp[currentStr] += 1
        } else {
            lookUp[currentStr] = 1
        }
    }



    for (i in lookUp) {
        if (lookUp[i] == 1) {
            return str.indexOf(i)
        }

    }

    return -1
}

console.log(firstNonRepeatingCharacter("aaabbcccccdeeefgghiiij"))