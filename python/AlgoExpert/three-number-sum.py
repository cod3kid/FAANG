def threeNumberSum(arr, targetSum):
  sortedArr = sorted(arr)
  result = []
  for i in range(len(sortedArr)-2):  
     
     leftPtr = i + 1
     rightPtr = len(sortedArr)-1

     while leftPtr < rightPtr:
       threeSums = sortedArr[i] + sortedArr[leftPtr] + sortedArr[rightPtr]
       if threeSums == targetSum:
         result.append([sortedArr[i],sortedArr[leftPtr],sortedArr[rightPtr]])
         leftPtr +=1
         rightPtr-=1
        
       if threeSums > targetSum:
         rightPtr-=1
       if threeSums < targetSum:
         leftPtr+=1

  return result

def threeNumberSumBruteForce(arr, targetSum):
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
        
  return sorted(result,key=lambda x: (x[0], x[1], x[2]))



arr = [12, 3, 1, 2, -6, 5, -8, 6]
targetSum = 0
# print(threeNumberSumBruteForce(arr, targetSum))
print(threeNumberSum(arr, targetSum))


