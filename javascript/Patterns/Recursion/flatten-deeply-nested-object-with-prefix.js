const flattenWithPrefix = (obj, prefix) => {
  let result = {};
  for (let key in obj) {
    let prefixKey = prefix === "" ? key : prefix + "." + key;

    if (typeof obj[key] === "object") {
      result = {
        ...result,
        ...flattenWithPrefix(obj[key], prefixKey),
      };
    } else {
      result[prefixKey] = obj[key];
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

console.log(flattenWithPrefix(obj1, ""));
