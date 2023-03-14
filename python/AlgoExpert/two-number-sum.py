def twoNumberSum(arr, targetSum):
    # Time Complexity O(n^2) // Brute Force Approach
    # for i in range(len(arr)):
    #     for j in range(len(arr)):
    #         if i!=j and arr[i]+arr[j] == targetSum :
    #             return [arr[i],arr[j]]
        # return []


   # if nums.get(potential_match)==True: way to check a key in a dictionary

    # Time Complexity O(n)
    nums = {}
    for i in range(len(arr)):
        potentialMatch  = targetSum - arr[i] 
        if potentialMatch in nums:
            return [potentialMatch,arr[i]]
        else:
            nums[arr[i]]=True

    return []


arr = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10
print(twoNumberSum(arr,targetSum))
    
