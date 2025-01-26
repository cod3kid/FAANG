/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let bull = 0;
  let cows = 0;

  let map = {};
  let bulls = {};
  for (let char of secret) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == secret[i] && map[guess[i]]) {
      bull++;
      map[guess[i]]--;
      bulls[i] = true;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (secret.includes(guess[i]) && map[guess[i]] > 0 && !bulls[i]) {
      cows++;
      map[guess[i]]--;
    }
  }

  return bull + "A" + cows + "B";
};
