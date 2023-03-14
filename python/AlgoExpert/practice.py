def getSum(arr, sequence):
    
    sequenceIndex = 0
    
    for i in range(len(arr)):
        if arr[i] == sequence[sequenceIndex]:
            sequenceIndex+=1
        
        if sequenceIndex == len(sequence):
            return True

    return False

arr = [5, 1,22,25,6,-1,8,10]
sequence = [1,6,-1,10]
print(getSum(arr,sequence))
