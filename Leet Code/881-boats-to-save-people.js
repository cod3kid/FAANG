//LeetCode 881 Medium
//Two Pointer Problem
function noOfRescueBoats(people, limit) {
    pointer_a = 0
    pointer_b = people.length - 1
    noOfBoats = 0

    people.sort((a, b) => a - b)

    while (pointer_a <= pointer_b) {
        if (pointer_a == pointer_b) {
            noOfBoats++
            return noOfBoats
        }
        else if (people[pointer_a] + people[pointer_b] > limit) {
            pointer_b--
            noOfBoats++
        }
        else {
            pointer_a++
            pointer_b--
            noOfBoats++
        }
    }
    console.log('hello')
    return noOfBoats
}

people = [3, 2, 2, 1]
limit = 3
console.log(noOfRescueBoats(people, limit))