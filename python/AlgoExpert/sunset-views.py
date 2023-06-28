def sunsetViewsBruteForce(buildings, direction):
    result = []

    if len(buildings) == 0:
        return []
    if direction == "WEST":
        buildings.reverse()

    for i in range(len(buildings)-1):
        minCheck = []
        for j in range(i+1,len(buildings)):
            if buildings[i] > buildings[j]:
                minCheck.append(j)
            
        if len(minCheck) == len(buildings)-i-1:
            if direction == "WEST":
                result.append(len(buildings)-1- i)
            else:
                result.append(i)
        
        minCheck=[]

    if direction == "WEST":
        result.append(0)
    else:
        result.append(len(buildings)-1)
    return list(set(result))


buildings = [3, 5, 4, 4, 3, 1, 3, 2]
direction = "WEST"
print(sunsetViewsBruteForce(buildings,direction))
