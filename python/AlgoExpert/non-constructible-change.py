def nonConstructibleChange(arr):
    sortedArr = sorted(arr)
    print(sorted(arr))
    currentChangeCreated = 0
    for i in sortedArr:
        if i > currentChangeCreated+1:
          return currentChangeCreated + 1
        
        currentChangeCreated+=i

    return currentChangeCreated+1


arr = [5,7,1,1,2,3,22]
print(nonConstructibleChange(arr))


