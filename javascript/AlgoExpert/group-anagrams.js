// const groupAnagrams = (words) => {
//   const result = [];

//   words.forEach((word, index) => {
//     const sortedWord = word.split("").sort().join("");
//     if (index === 0) {
//       result.push([word]);
//     } else {
//       let isPairFound = false;
//       result.forEach((item) => {
//         if (!isPairFound && item[0].split("").sort().join("") === sortedWord) {
//           isPairFound = true;
//           item.push(word);
//         }
//       });

//       if (!isPairFound) {
//         result.push([word]);
//       }
//     }
//   });
//   return result;
// };

// time: O(w * n log n) => w: no. of words, n: length of the longest word
const groupAnagrams = (words) => {
  const anagrams = {};

  words.forEach((word) => {
    const sortedWord = word.split("").sort().join("");
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  });

  return Object.values(anagrams);
};

words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
console.log(groupAnagrams(words));
