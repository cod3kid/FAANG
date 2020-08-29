a = [0, 1, 0, 3, 12]
count = 0
for (i in a) {
  if (a[i] == 0) {
    count++
    a.splice(i, 1)
  }
}

for (i = 0; i < count; i++) {
  a.push(0)
}

console.log(a)