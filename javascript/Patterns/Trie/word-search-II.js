// My own Naive DFS without Trie

// const findWords = (board, words) => {
//   let result = [];
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       for (let k = 0; k < words.length; k++) {
//         dfs(board, i, j, words[k], result, k, words);
//       }
//     }
//   }

//   return Array.from(new Set(result));
// };

// const dfs = (board, i, j, wordSub, result, k, words) => {
//   if (wordSub.length === 0) {
//     return result.push(words[k]);
//   }

//   if (i < 0 || i > board.length - 1 || j < 0 || j > board[i].length - 1) return;

//   if (board[i][j] === wordSub[0]) {
//     dfs(board, i + 1, j, wordSub.slice(1), result, k, words);
//     dfs(board, i - 1, j, wordSub.slice(1), result, k, words);
//     dfs(board, i, j + 1, wordSub.slice(1), result, k, words);
//     dfs(board, i, j - 1, wordSub.slice(1), result, k, words);
//   } else {
//     return false;
//   }
// };

// const words = ["TOURISM", "DESTINED", "POPULAR"];

// const board = [
//   ["P", "S", "L", "A", "M"],
//   ["O", "P", "U", "R", "O"],
//   ["O", "L", "I", "E", "O"],
//   ["R", "T", "A", "S", "N"],
//   ["S", "I", "T", "A", "C"],
// ];
// console.log(findWords(board, words));

class Trie {
  constructor() {
    this.root = {};
    this.isWord = false;
  }

  insert(word) {
    let current = this.root;

    for (const letter of word) {
      if (!current[letter]) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current.isWord = true;
  }
}

var findWords = function (board, words) {
  const trie = new Trie(words);

  for (let word of words) {
    trie.insert(word);
  }

  const result = new Set();

  const visited = new Set();

  const dfs = (i, j, node, subResult) => {
    //base cases: out of bounds, letter does not exist in next prefix
    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      !node[board[i][j]] ||
      visited.has(`${i} ${j}`)
    ) {
      return;
    }

    visited.add(`${i} ${j}`);
    subResult += board[i][j];

    node = node[board[i][j]];

    if (node.isWord) {
      result.add(subResult);
    }

    dfs(i, j + 1, node, subResult);
    dfs(i, j - 1, node, subResult);
    dfs(i - 1, j, node, subResult);
    dfs(i + 1, j, node, subResult);

    visited.delete(`${i} ${j}`);
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (trie.root[board[i][j]]) {
        dfs(i, j, trie.root, "");
      }
    }
  }

  return [...result];
};

const board = [
  ["o", "a", "b", "n"],
  ["o", "t", "a", "e"],
  ["a", "h", "k", "r"],
  ["a", "f", "l", "v"],
];

const words = ["oa", "oaa"];

console.log(findWords(board, words));
