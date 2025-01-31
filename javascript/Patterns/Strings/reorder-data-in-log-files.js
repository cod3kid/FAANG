/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let letterLog = [];
  let digitLog = [];

  for (let log of logs) {
    let isLetter = isNaN(parseInt(log.at(-1)));
    if (isLetter) {
      letterLog.push(log);
    } else {
      digitLog.push(log);
    }
  }

  letterLog.sort((a, b) => {
    let contentA = a.split(" ").slice(1).join(" ");
    let contentB = b.split(" ").slice(1).join(" ");

    if (contentA === contentB)
      return a.split(" ")[0].localeCompare(b.split(" ")[0]);

    return contentA.localeCompare(contentB);
  });

  return [...letterLog, ...digitLog];
};
