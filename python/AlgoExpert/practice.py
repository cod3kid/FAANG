def bubbleSort(nums):

    for i in range(len(nums)):
        lowest = i
        for j in range(i,len(nums)):
            if nums[lowest] > nums[j]:
                lowest = j

        swap = nums[i]
        nums[i] =  nums[lowest]
        nums[lowest] = swap

    return nums


nums = [9,5,3,34,21,7,10,1,100]
print(bubbleSort(nums))