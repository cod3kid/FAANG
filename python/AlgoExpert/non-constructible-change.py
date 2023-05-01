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
    i = 0
    while True:
        for j in sortedArr:
            print(j)
        i+=1

    return False

print(nonConstructibleChange(arr))
print(nonConstructibleChangeBruteForce(arr))


