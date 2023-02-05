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
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("app"));
// console.log(JSON.stringify(trie.root));
