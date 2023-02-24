const isPathCrossing = (path) => {
  const set = new Set();
  let x = 0,
    y = 0;

  for (let dir of path) {
    set.add(`${x}_${y}`);
    if (dir === "N") {
      x -= 1;
    } else if (dir === "S") {
      x += 1;
    } else if (dir === "E") {
      y += 1;
    } else {
      y -= 1;
    }

    if (set.has(`${x}_${y}`)) return true;
  }

  return false;
};

path = "NESWW";
console.log(isPathCrossing(path));
