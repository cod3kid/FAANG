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

  search(word) {
    let map = this.root;

    for (let char of word) {
      if (!map[char]) {
        return false;
      }
      map = map[char];
    }

    return map["isEnd"];
  }

  startsWith(prefix) {
    let map = this.root;

    for (let char of prefix) {
      if (!map[char]) {
        return false;
      }
      map = map[char];
    }

    return true;
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

const trie = new Trie();
trie.insert("apple");
console.log(trie.startsWith("app"));
trie.insert("monkeypen");
trie.insert("sufail");
trie.insert("app");
trie.insert("cricket");
trie.insert("basketball");
console.log(trie.getWords());
// console.log(JSON.stringify(trie.root));
