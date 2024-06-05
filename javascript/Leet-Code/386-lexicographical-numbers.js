/**
 * @param {number} n
 * @return {number[]}
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

      // For sorting lexicographically
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

var lexicalOrder = function (n) {
  let trie = new Trie();

  for (let i = 1; i <= n; i++) {
    trie.insert(i + "");
  }

  return trie.getWords().map((item) => parseInt(item));
};
