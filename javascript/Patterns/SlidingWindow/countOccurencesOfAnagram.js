function countOccurrencesOfAnagaram(text, word) {
  windowString = "";
  start = 0;
  anagram = word.split("").sort().join("");
  occurences = 0;
  for (i = 0; i < text.length; i++) {
    windowString = text.substr(start, word.length);

    if (i >= word.length - 1) {
      if (windowString.split("").sort().join("") === anagram) {
        occurences++;
      }
      windowString = text.substr(start + 1, word.length);
      start++;
    }
  }

  return occurences;
}

text = "forxxorfxdofr";
word = "for";
console.log(countOccurrencesOfAnagaram(text, word));
