const lexicographicalCount = (str, target) => {
  let count = 0;
  for (let i = 0; i <= str.length - target; i++) {
    const originalString = str.slice(i, i + target);
    const hashedString = str
      .slice(i, i + target)
      .split("")
      .reverse()
      .join("");

    for (let j = 0; j < originalString.length; j++) {
      if (hashedString[j] < originalString[j]) {
        count += 1;
        break;
      } else if (hashedString[j] > originalString[j]) {
        break;
      }
    }
  }
  return count;
};

console.log(lexicographicalCount("amazon", 3));
