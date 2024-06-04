/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let map = this.root;
    for (let char of word) {
      if (!map[char]) {
        map[char] = {};
      }
      map = map[char];
      if (!map["isEnd"]) map["isEnd"] = false;
    }
    map["isEnd"] = true;
  }

  getWords() {
    let root = this.root;
    let result = [];

    const dfs = (node, currentWord) => {
      if (node["isEnd"]) {
        result.push(currentWord);
      }

      let keys = Object.keys(node).sort();
      for (let char of keys) {
        if (char !== "isEnd") {
          dfs(node[char], currentWord + char);
        }
      }
    };

    dfs(root, "");

    return result;
  }
}

var topKFrequent = function (words, k) {
  let frequencyCounter = {};
  let bucket = Array(words.length + 1).fill(null);
  let topK = [];

  for (let word of words) {
    frequencyCounter[word] = (frequencyCounter[word] || 0) + 1;
  }

  for (let [word, frequency] of Object.entries(frequencyCounter)) {
    if (bucket[frequency] === null) {
      bucket[frequency] = new Trie();
    }

    bucket[frequency].insert(word);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i] !== null) {
      let retrievedWords = bucket[i].getWords();

      if (retrievedWords.length < k - topK.length) {
        topK.push(...retrievedWords);
      } else {
        topK.push(...retrievedWords.slice(0, k - topK.length));
      }
    }
  }

  return topK;
};
