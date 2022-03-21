
function distanceBusStop(distance, start, destination) {


    let clockwiseDistance = 0
    let totalDistance = 0

    for (let i = 0; i < distance.length; i++) {

        if (start < destination && (i >= start && i < destination)) {
            clockwiseDistance += distance[i]
        }

        if (start > destination && (i >= start || i < destination)) {
            clockwiseDistance += distance[i]
        }

        totalDistance += distance[i]
    }

    let antiClockwiseDistance = totalDistance - clockwiseDistance

    let result = Math.min(clockwiseDistance, antiClockwiseDistance)

    return result
}

distance = [1, 2, 6, 4]
start = 3
destination = 1

console.log(distanceBusStop(distance, start, destination))