function anagramChecker(str1, str2) {
  lookup = {};

  for (char of str1) {
    if (lookup[char]) {
      lookup[char] += 1;
    } else {
      lookup[char] = 1;
    }
  }

  for (char of str2) {
    if (lookup[char]) {
      lookup[char] -= 1;
    } else {
      return false;
    }
  }

  for (key in lookup) {
    if (lookup[key] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(anagramChecker("root", "toor"));
