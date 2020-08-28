function areParanthesisBalanced(expr) {
  stack = []
  checkArr = ["(", "{", "["]
  for (char in expr) {
    if (checkArr.indexOf(expr[char]) >= 0) {

      stack.push(expr[char])
    }
    else {

      if (!stack.length) {
        return false
      }
      current_char = stack.pop()
      if (current_char == '(') {
        if (expr[char] != ")")
          return false
      }
      if (current_char == '{') {
        if (expr[char] != "}")
          return false
      }
      if (current_char == '[') {
        if (expr[char] != "]")
          return false
      }
    }
  }
  if (stack.length) {
    return false
  }


  return true
}
s = "()"
console.log(areParanthesisBalanced(s))
