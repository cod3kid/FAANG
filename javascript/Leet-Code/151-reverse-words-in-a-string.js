// const reverseWords = function (s) {
//   return s
//     .trim()
//     .split(" ")
//     .filter((item) => item.length)
//     .reverse()
//     .join(" ");
// };

const reverseWords = (s) => {
  let words = s.split(" ");
  let output = "";

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i].length === 0) continue;

    output += " " + words[i];
  }

  return output.slice(1);
};

let str = "a good   example";
console.log(reverseWords(str));
