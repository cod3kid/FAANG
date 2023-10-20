// const semordnilap = (words) => {
//   const palindromes = {};

//   words.forEach((word) => {
//     const sortedWord = word.split("").sort().join("");
//     if (palindromes[sortedWord]) {
//       palindromes[sortedWord].push(word);
//     } else {
//       palindromes[sortedWord] = [word];
//     }
//   });

//   return Object.values(palindromes).filter((arr) => arr.length === 2);
// };

const semordnilap = (words) => {
  const wordSet = new Set(words);
  const result = [];
  words.forEach((word) => {
    const reversedWord = word.split("").reverse().join("");
    if (wordSet.has(reversedWord)) {
      result.push([word, reversedWord]);
      wordSet.delete(word);
      wordSet.delete(reversedWord);
    }
  });

  return result;
};

words = ["diaper", "abc", "test", "cba", "repaid"];
console.log(semordnilap(words));
