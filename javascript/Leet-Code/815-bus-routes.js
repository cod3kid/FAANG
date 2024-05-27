/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  let adjacencyList = {};
  for (let i = 0; i < routes.length; i++) {
    let stops = routes[i];
    for (let j = 0; j < stops.length; j++) {
      let stop = stops[j];
      if (!adjacencyList[stop]) {
        adjacencyList[stop] = [];
      }

      adjacencyList[stop].push(i);
    }
  }

  let queue = [];
  let visited_buses = {};
  let visited_stops = {};

  queue.push([source, 0]);

  while (queue.length) {
    let [stop, routeLength] = queue.shift();

    if (stop === target) return routeLength;

    if (adjacencyList[stop]) {
      adjacencyList[stop].forEach((bus) => {
        if (!visited_buses[bus]) {
          for (let stn of routes[bus]) {
            if (!visited_stops[stn]) {
              visited_stops[stn] = true;
              queue.push([stn, routeLength + 1]);
            }
          }
          visited_buses[bus] = true;
        }
      });
    }
  }

  return -1;
};

let routes = [
  [2, 5, 7],
  [4, 6, 7],
];
let source = 2;
let target = 6;

console.log(numBusesToDestination(routes, source, target));
