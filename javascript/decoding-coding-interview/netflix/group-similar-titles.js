const titles = ["duel", "dule", "speed", "spede", "deul", "cars"];

/* My Solution */

// const groupedTitles = {};

// titles.forEach((title) => {
//   const sortedTitle = title.split("").sort().join("");
//   if (groupedTitles[sortedTitle]) {
//     groupedTitles[sortedTitle].push(title);
//   } else {
//     groupedTitles[sortedTitle] = [title];
//   }
// });

// const query = "spede";

// Object.keys(groupedTitles).forEach((key) => {
//   if (query.split("").sort().join("") === key) {
//     console.log(groupedTitles[key]);
//   }
// });

/* 26-element vector approach */

function groupTitles(strs) {
  let res = {};
  for (let s of strs) {
    let count = new Array(26).fill(0);
    for (let c of s) {
      index = c.charCodeAt(0) - "a".charCodeAt(0);
      count[index] += 1;
    }

    let key = count;
    if (key in res) {
      res[key].push(s);
    } else {
      res[key] = [s];
    }
  }
  let result = [];
  for (let key in res) {
    result.push(res[key]);
  }
  return result;
}

let gt = groupTitles(titles);

let query = "spede";

for (let [e, g] of Object.entries(gt)) {
  if (g.includes(query)) {
    console.log(g);
  }
}
