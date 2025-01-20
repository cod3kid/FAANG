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
