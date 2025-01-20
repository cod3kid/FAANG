//LeetCode 841 Medium

function keysAndRooms(rooms) {
  let q = [];
  q.push(rooms[0]);
  let keys = [0];

  while (q.length > 0) {
    let room = q.shift();
    room.forEach((item) => {
      if (!keys.includes(item)) {
        keys.push(item);
        q.push(rooms[item]);
      }
    });
  }

  for (let i = 1; i < rooms.length; i++) {
    if (!keys.includes(i)) {
      return false;
    }
  }
  return true;
}

rooms = [[1], [2], [1, 3], []];

console.log(keysAndRooms(rooms));

// New Soln

var canVisitAllRooms = function (rooms) {
  /*
      rooms array is already in Adjacency Matrix Form, so no need of constructing one
    */
  let stack = [];
  let visited = {};

  stack.push(0);
  visited[0] = true;

  while (stack.length) {
    let current = stack.pop();

    rooms[current].forEach((neighbor) => {
      if (!visited[neighbor]) {
        stack.push(neighbor);
        visited[neighbor] = true;
      }
    });
  }

  return Object.keys(visited).length === rooms.length;
};
