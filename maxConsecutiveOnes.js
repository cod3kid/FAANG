a = [0,1, 0,1, 1, 1, 0, 1, 1]
streak = 0
count = 0
for (i in a) {
  if (a[i] == 1) {
    count++;
    streak = Math.max(streak, count)
  }
  else {
    count = 0
  }
}
console.log(streak)


