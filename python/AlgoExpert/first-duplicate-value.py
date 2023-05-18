# O(n)
def firstDuplicateValue(array):
    trackCount = {}
    for i in range(len(array)):
        currElement = array[i]
        if currElement in trackCount:
            return currElement
        else:
            trackCount[currElement] = 1
                
    return -1

arr =  [2, 1, 5, 2, 3, 3, 4]
print(firstDuplicateValue(arr))
