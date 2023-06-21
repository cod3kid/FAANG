def bubbleSort(nums):
    
    for i in range(len(nums)):
        for j in range(len(nums)-1):
            if nums[j] > nums[j+1]:
                swap = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = swap

    return nums


nums = [9,5,3,34,21,7,10,1,100]
print(bubbleSort(nums))