def largestRange(array):
    sortedArr = sorted(list(set(array)))
    largestRange =[]
    currentRange = [sortedArr[0]]

    if len(array) == 1:
        return [array[0],array[0]]
    
    for i in range(1,len(sortedArr)):
        if sortedArr[i-1] + 1 == sortedArr[i]:
            currentRange.append(sortedArr[i])
        else:
            currentRange = [sortedArr[i]]

        if len(currentRange) >= len(largestRange):
            largestRange = currentRange
    return [largestRange[0],largestRange[-1]]



array = [19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]

print(largestRange(array))