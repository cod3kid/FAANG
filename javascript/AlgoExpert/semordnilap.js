const semordnilap = (words) => {
  const palindromes = {};

  words.forEach((word) => {
    const sortedWord = word.split("").sort().join("");
    if (palindromes[sortedWord]) {
      palindromes[sortedWord].push(word);
    } else {
      palindromes[sortedWord] = [word];
    }
  });

  return Object.values(palindromes).filter((arr) => arr.length === 2);
};

words = ["diaper", "abc", "test", "cba", "repaid"];
console.log(semordnilap(words));
