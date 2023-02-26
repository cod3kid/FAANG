const reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((item) => item.length)
    .reverse()
    .join(" ");
};

let str = "a good   example";
console.log(reverseWords(str));
