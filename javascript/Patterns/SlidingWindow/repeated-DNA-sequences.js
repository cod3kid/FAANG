/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let map = {};
  const windowSize = 10;
  for (let i = 0; i <= s.length - windowSize; i++) {
    let subs = s.slice(i, i + windowSize);
    map[subs] = (map[subs] || 0) + 1;
  }

  return Object.entries(map)
    .filter((entry) => entry[1] > 1)
    .map((item) => item[0]);
};
