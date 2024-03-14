const titles = ["duel", "dule", "speed", "spede", "deul", "cars"];

const groupedTitles = {};

titles.forEach((title) => {
  const sortedTitle = title.split("").sort().join("");
  if (groupedTitles[sortedTitle]) {
    groupedTitles[sortedTitle].push(title);
  } else {
    groupedTitles[sortedTitle] = [title];
  }
});

console.log(groupedTitles);
