def moveElementToEnd(array, toMove):
    toMoveArray = []
    i=0
    nonToMoveArray =  array[:]
    print(nonToMoveArray)

    while i < len(array)-1:
        if array[i] == toMove:
            toMoveArray.append(toMove)
            del nonToMoveArray[i]

        i+=1
    return nonToMoveArray + toMoveArray


array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
print(moveElementToEnd(array, toMove))
# print(moveElementToEnd(arr1, arr2))


