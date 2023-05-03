# def nonConstructibleChange(arr):
#     sortedArr = sorted(arr)
#     print(sorted(arr))
#     currentChangeCreated = 0
#     for i in sortedArr:
#         if i > currentChangeCreated+1:
#           return currentChangeCreated + 1
        
#         currentChangeCreated+=i

#     return currentChangeCreated+1



def threeNumberSum(arr, targetSum):
  sortedArr = sorted(arr)

  i=0
  j=1
  k=2

  result =[]
  for i in range(len(sortedArr)):
    for j in range(len(sortedArr)):
      if i==j:
        break
      for k in range(len(sortedArr)):
        if i==k or k==j:
          break
        
        if sortedArr[i] + sortedArr[j] + sortedArr[k] == targetSum:
          result.append(sorted([sortedArr[i],sortedArr[j],sortedArr[k]]))
        
  return sorted(result,key=lambda x:x[1])



arr = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0
# print(nonConstructibleChange(arr))
print(threeNumberSum(arr, targetSum))


