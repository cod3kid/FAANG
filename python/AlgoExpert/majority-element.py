def majorityElement(array):
    
    dict = {}
    maxCount = 0
    maxNum = None


    for num in array:
        if num in dict:
            dict[num] += 1
        else:
            dict[num] = 1


    for key, value in dict.items():
        if maxNum == None:
            maxNum = key
            maxCount = value
        elif value > maxCount:
            maxNum = key
            maxCount = value

    if maxCount > int(len(array)/2):
        return maxNum
    return -1


array = [1, 2,1]
print(majorityElement(array))