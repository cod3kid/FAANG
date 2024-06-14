/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let components = path.split("/");

  for (let comp of components) {
    if (comp === "" || comp === ".") {
      continue;
    } else if (comp === "..") {
      stack.pop();
    } else {
      stack.push(comp);
    }
  }

  return "/" + stack.join("/");
};
