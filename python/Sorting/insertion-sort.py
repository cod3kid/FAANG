def insertionSort(nums):

    for i in range(1,len(nums)):
       j = i
       while j>0 and nums[j] < nums[j-1]:
           nums[j],nums[j-1] = nums[j-1],nums[j]
           j-=1
    
    return nums

nums = [9,5,3,34,21,7,10,1,300,100]
print(insertionSort(nums))