// Time: O(n^3)
function longestPalindromicSubstring(string) {
  let longestString = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const subs = string.slice(i, j + 1);
      if (
        subs === subs.split("").reverse().join("") &&
        subs.length > longestString.length
      ) {
        longestString = subs;
      }
    }
  }

  return longestString;
}

string = "abaxyzzyxf";
console.log(longestPalindromicSubstring(string));
