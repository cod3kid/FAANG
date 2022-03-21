a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < i; j++) {
      let swap = a[i][j]
      a[i][j] = a[j][i]
      a[j][i] = swap
    }
  }
  
  console.log(a)