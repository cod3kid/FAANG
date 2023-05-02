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

def nonConstructibleChangeBruteForce(arr):
    sortedArr = sorted(arr)
    i = 1
    while True:
        currentChangeCreated = 0
        currentSum = 0
        for j in sortedArr:
            
            currentSum += j
            if i == j:
                print(i, j)
                break

            if j+currentSum > i:
                # Try another loop here
                return currentSum
            
        i+=1

# print(nonConstructibleChange(arr))
print(nonConstructibleChangeBruteForce(arr))


