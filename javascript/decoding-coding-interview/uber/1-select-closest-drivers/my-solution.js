const locations = [
  [1, 3],
  [2, 4],
  [2, -1],
  [-2, 2],
  [5, 3],
  [3, -2],
];

const distances = [];
for (let i = 0; i < locations.length; i++) {
  distances.push(
    Math.ceil(
      Math.sqrt(
        Math.pow(locations[i][0] - 0, 2) + Math.pow(locations[i][1] - 0, 2)
      ) * 10
    ) / 10
  );
}

console.log(distances);
