function findAllAnagramInAString(text, word) {
  start = 0;
  windowString = "";
  anagram = word.split("").sort().join("");
  result = [];

  for (i = 0; i < text.length; i++) {
    windowString = text.substr(i, word.length);

    if (windowString.split("").sort().join("") === anagram) {
      result.push(i);
    }
  }
  return result;
}

text = "abab";
word = "ab";
console.log(findAllAnagramInAString(text, word));
// Sliding Window But sort split and join methods use lot of computation time
