//LeetCode 841 Medium

function keysAndRooms(rooms) {
    let q = [];
    q.push(rooms[0])
    let keys = [0]

    while (q.length > 0) {
        let room = q.shift();
        room.forEach(item => {

            if (!keys.includes(item)) {
                keys.push(item)
                q.push(rooms[item])
            }
        })
    }

    for (let i = 1; i < rooms.length; i++) {
        if (!keys.includes(i)) {
            return false
        }

    }
    return true;
}

rooms = [[1], [2], [1, 3], []]

console.log(keysAndRooms(rooms))