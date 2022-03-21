function maxDistanceToClosestPerson(seats) {

    let maxDistance = -Infinity;
    let preOne = -1;
    for (let i = 0; i < seats.length; ++i) {
        if (seats[i] == 1) {
            preOne == -1 ? maxDistance = i : maxDistance = Math.max(maxDistance, Math.floor((i - preOne) / 2));
            preOne = i;
        }
    }

    return preOne == seats.length - 1 ? maxDistance : Math.max(seats.length - 1 - preOne, maxDistance);
}

seats = [1,0,0,0,1,0,1]
console.log(maxDistanceToClosestPerson(seats))