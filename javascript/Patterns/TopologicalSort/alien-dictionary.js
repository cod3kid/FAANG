function alienOrder(words) {
  let adjacencyList = {};
  let inDegreesCount = {};

  for (let word of words) {
    for (let char of word) {
      if (!adjacencyList[char]) {
        adjacencyList[char] = [];
      }

      if (inDegreesCount[char] === undefined) {
        inDegreesCount[char] = 0;
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    if (word1.startsWith(word2) && word1.length > word2.length) {
      return "";
    }

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      let char1 = word1[j];
      let char2 = word2[j];
      if (char1 !== char2) {
        if (!adjacencyList[char1].includes(char2)) {
          adjacencyList[char1].push(char2);
          inDegreesCount[char2] += 1;
        }
        break;
      }
    }
  }

  let queue = [];
  let order = [];

  Object.entries(inDegreesCount).forEach((item) => {
    if (item[1] === 0) {
      queue.push(item[0]);
    }
  });

  while (queue.length) {
    let node = queue.shift();
    order.push(node);

    adjacencyList[node].forEach((neighbor) => {
      inDegreesCount[neighbor] -= 1;
      if (inDegreesCount[neighbor] === 0) {
        queue.push(neighbor);
      }
    });
  }

  if (order.length === Object.keys(inDegreesCount).length) {
    return order.join("");
  }

  return "";
}

const words = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words)); // Output: "wertf"
