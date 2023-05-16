def transposeMatrix(matrix):
    newMatrix = []
    for i in range(len(matrix)):
        currRow = []
        for j in range(len(matrix[i])):
          print(i,j) 
          if i <= len(matrix) and j <= len(matrix[i]):
            currRow.append(matrix[j][i])
            # print('index',j,i)
        newMatrix.append(currRow)
        currRow=[]

    return newMatrix

matrix = [[1,2],[3,4],[5,6]]
print(transposeMatrix(matrix))