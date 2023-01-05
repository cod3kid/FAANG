function fruitsIntoBaskets(fruits) {
  start = 0;
  maxLen = 0;
  lookUp = {};
  for (i = 0; i < fruits.length; i++) {
    if (lookUp[fruits[i]]) {
      lookUp[fruits[i]] += 1;
    } else {
      lookUp[fruits[i]] = 1;
    }

    while (Object.keys(lookUp).length > 2) {
      lookUp[fruits[start]] -= 1;

      if (lookUp[fruits[start]] == 0) {
        delete lookUp[fruits[start]];
      }
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

fruits = ["A", "B", "C", "B", "B", "C"];
console.log(fruitsIntoBaskets(fruits));
