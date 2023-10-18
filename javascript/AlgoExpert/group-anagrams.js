const groupAnagrams = (words) => {
  const result = [];

  words.forEach((word, index) => {
    const sortedWord = word.split("").sort().join("");
    if (index === 0) {
      result.push([word]);
    } else {
      let isPairFound = false;
      result.forEach((item) => {
        if (!isPairFound && item[0].split("").sort().join("") === sortedWord) {
          isPairFound = true;
          item.push(word);
        }
      });

      if (!isPairFound) {
        result.push([word]);
      }
    }
  });
  return result;
};

words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(words));
