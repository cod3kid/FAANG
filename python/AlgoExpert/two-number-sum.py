def twoNumberSum(arr, targetSum):
    
    for i in range(len(arr)):
        for j in range(len(arr)):
            if i!=j and arr[i]+arr[j] == targetSum :
                return [arr[i],arr[j]]

    return []


arr = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
print(twoNumberSum(arr,targetSum))
    
