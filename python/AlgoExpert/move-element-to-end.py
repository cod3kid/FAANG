def moveElementToEnd(array, toMove):
    toMoveArray = []
    nonToMoveArray = []

    for i in range(len(array)):
        if array[i] == toMove:
            toMoveArray.append(toMove)
        else:
            nonToMoveArray.append(array[i])

    return nonToMoveArray + toMoveArray


array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
print(moveElementToEnd(array, toMove))
# Keeping only my solution I found this is easier to follow


