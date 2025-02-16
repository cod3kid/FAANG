const flatten = (obj, depth) => {
  if (depth === 0) return obj;
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      result = { ...result, ...flatten({ ...obj[key] }, depth - 1) };
    } else {
      result[key] = obj[key];
    }
  }

  return result;
};

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {
      g: 5,
      h: 6,
    },
  },
};

console.log(flatten(obj1, 2));
