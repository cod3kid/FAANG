def twoSum(arr,target):

    for i in range(len(arr)):
        for j in range(len(arr)):
            if i==j:
                break

            if arr[i]+arr[j] == target:
                return [i,j]





arr =  [2,7,11,15]
target = 9
print(twoSum(arr,target))