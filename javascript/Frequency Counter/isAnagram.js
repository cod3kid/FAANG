//Frequency Counter Method to find Anagram in linear time O(n)
// Alternate solution O(nlogn) sort the strings

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  lookup = {};

  for (let i in str1) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i in str2) {
    let letter = str2[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

str1 = "eat";
str2 = "ate";

console.log(isAnagram(str1, str2));
