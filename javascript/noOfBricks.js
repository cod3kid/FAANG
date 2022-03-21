total = 18
five = 0
two = 0

while (total > 1) {
  if (total - 5 >= 0) {
    total -= 5
    five++
  }
  else if (total - 2 >= 0) {
    total -= 2
    two++
  }
}

console.log(`five: ${five}  two:${two}  remaining: ${total}`)