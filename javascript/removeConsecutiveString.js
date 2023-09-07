const removeConsecutiveString = (str) => {
  let stack = [];
  for (let char of str) {
    const top = stack.slice(-1)[0];
    if (top === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

const str = "abbaba";
console.log(removeConsecutiveString(str));
// We can solve this using recursion too. TC: O(n^2)
