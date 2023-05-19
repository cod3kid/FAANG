def bestSeat(seats):
    largestSubset = []
    currSubset = []

    if len(seats) == 1:
        return -1
    
    for i in range(len(seats)):
        if seats[i] == 0:
            currSubset.append(i)
        elif seats[i] != 0 and len(currSubset) > len(largestSubset):
            largestSubset = currSubset
            currSubset = []
        else:
            currSubset = []
    
    #  For the condition where all the elements are 1
    if largestSubset == []:
        return -1
    
    middleIndex = None
    if len(largestSubset) % 2 == 0:
        middleIndex = (int(len(largestSubset)/2)) - 1
    else:
        middleIndex = int(len(largestSubset)/2)

    return largestSubset[middleIndex]

seats =   [1, 0, 0, 0, 1, 0, 0, 0, 0, 1]
print(bestSeat(seats))