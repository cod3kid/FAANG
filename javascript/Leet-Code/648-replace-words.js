/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

class Trie {
  constructor() {
    this.root = {};
  }

  insert(str) {
    let map = this.root;
    for (let char of str) {
      if (!map[char]) {
        map[char] = {};
      }

      map = map[char];
      if (!map["isWord"]) map["isWord"] = false;
    }
    map["isWord"] = true;
  }

  replace(str) {
    let map = this.root;
    for (let i in str) {
      if (!map[str[i]]) {
        return str;
      }
      map = map[str[i]];

      if (map["isWord"]) return str.substring(0, parseInt(i) + 1);
    }

    return str;
  }
}

var replaceWords = function (dictionary, sentence) {
  let trie = new Trie();

  for (let word of dictionary) {
    trie.insert(word);
  }

  let splitSentence = sentence.split(" ");

  for (let i in splitSentence) {
    let replacedWord = trie.replace(splitSentence[i]);
    splitSentence[i] = replacedWord;
  }

  return splitSentence.join(" ");
};
