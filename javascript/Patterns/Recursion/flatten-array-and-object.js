const flatten = (input) => {
  if (Array.isArray(input)) {
    return flattenArray(input);
  } else if (typeof input1 === "object") {
    return flattenObject(input);
  }
  return input;
};

const flattenArray = (arr) => {
  const result = [];

  for (let i of arr) {
    if (i === null) {
      result.push(i);
    } else if (Array.isArray(i)) {
      result.push(...flattenArray(i));
    } else if (typeof i === "object") {
      result.push(flattenObject(i));
    } else {
      result.push(i);
    }
  }

  return result;
};

const flattenObject = (obj) => {
  let result = {};

  for (let key in obj) {
    if (obj[key] === null) {
      result[key] = null;
    } else if (Array.isArray(obj[key])) {
      result = { ...result, [key]: flattenArray(obj[key]) };
    } else if (typeof obj[key] === "object") {
      result = { ...result, ...flattenObject(obj[key]) };
    } else {
      result[key] = obj[key];
    }
  }

  return result;
};

const input1 = {
  a: 1,
  b: 2,
  c: [3, { d: 4, e: { f: null } }],
  h: {
    i: 6,
    j: {},
    k: undefined,
  },
  l: "Hi",
};

const input2 = [
  1,
  2,
  [3, { d: 4, e: undefined, nestedArr: [[5, [6]], [7]] }],
  {
    f: 8,
    g: null,
    h: {
      i: {},
    },
  },
];

console.log(flatten(input1));
console.log(flatten(input2));
