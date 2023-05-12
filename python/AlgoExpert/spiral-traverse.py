def spiralTraverse(array):
    
    result =[]
    startingRow = 0
    startingColumn = 0
    endingRow = len(array)-1
    endingColumn = len(array[0])-1

    while startingRow <= endingRow and startingColumn <= endingColumn:

        for col in range(startingColumn,endingColumn+1):
            result.append(array[startingRow][col])

        for row in range(startingRow+1,endingRow+1):
            result.append(array[row][endingColumn])

        for col in reversed(range(startingColumn,endingColumn)):
            if startingRow == endingRow:
                break
            result.append(array[endingRow][col])

        for row in reversed(range(startingRow+1,endingRow)):
            if startingColumn == endingColumn:
                break
            result.append(array[row][startingColumn])

        startingRow+=1
        endingRow-=1
        startingColumn+=1
        endingColumn-=1

    return result
array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
]
print(spiralTraverse(array))
