def sortedSquaredArray(arr):
    # O(n log n)
    sortedSquares = [0 for _ in arr]

    for i in range(len(arr)):
        sortedSquares[i]= arr[i] * arr[i]

    sortedSquares.sort()
    return sortedSquares



arr = [1, 2, 3, 5, 6, 8, 9]
print(sortedSquaredArray(arr))
