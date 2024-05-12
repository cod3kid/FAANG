var G_map = [
  ["a", "b"],
  ["b", "c"],
  ["a", "e"],
  ["d", "e"],
];
var path_costs = [12.0, 23.0, 26.0, 18.0];
var drivers = ["c", "d", "e", "f"];
var user = "a";

const city = {};
for (let i = 0; i < G_map.length; i++) {
  const checkPoint = G_map[i];
  const sourceNode = checkPoint[0];
  const destNode = checkPoint[1];
  const pathCost = path_costs[i];

  if (!city[sourceNode]) city[sourceNode] = {};

  if (!city[destNode]) city[destNode] = {};

  city[sourceNode][destNode] = pathCost;
  city[destNode][sourceNode] = pathCost;
}

console.log(city);
