//LeetCode 11 Medium

function containerWithMostWater(containers) {
    let maxArea = 0
    let a_pointer = 0
    let b_pointer = containers.length - 1

    while (a_pointer < b_pointer) {
        if (containers[a_pointer] < containers[b_pointer]) {
            maxArea = Math.max(maxArea, containers[a_pointer] * (b_pointer - a_pointer))
            a_pointer++
        } else {
            maxArea = Math.max(maxArea, containers[b_pointer] * (b_pointer - a_pointer))
            b_pointer--
        }

    }

    return maxArea
}

containers = [2, 3, 4, 5, 18, 17, 6]


console.log(containerWithMostWater(containers))