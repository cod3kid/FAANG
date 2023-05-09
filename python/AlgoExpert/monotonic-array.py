def isMonotonic(array):
    isNonDecreasing = True
    isNonIncreasing = True

    for i in range(len(array)):
        if  array[i]<array[i-1]:
            isNonDecreasing = False
        if array[i] > array[i-1]:
            isNonIncreasing = False

    return isNonDecreasing or isNonIncreasing
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
print(isMonotonic(array))
