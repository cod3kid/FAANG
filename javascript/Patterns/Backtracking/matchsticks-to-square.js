/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  let sum = matchsticks.reduce((acc, curr) => acc + curr, 0);
  let sideLength = Math.floor(sum / 4);
  let sides = Array(4).fill(0);

  if (sideLength !== sum / 4) return false;

  /*
    Larger matchsticks are more restrictive (fewer places they can fit), 
    so handling them earlier reduces the number of possibilities to explore and 
    avoids wasting time on invalid combinations.
    */

  matchsticks.sort((a, b) => b - a);

  const backtrack = (i) => {
    if (i === matchsticks.length) return true;

    for (let j = 0; j < 4; j++) {
      if (sides[j] + matchsticks[i] <= sideLength) {
        sides[j] += matchsticks[i];
        if (backtrack(i + 1)) return true;
        sides[j] -= matchsticks[i];
      }
    }
    return false;
  };

  return backtrack(0);
};
