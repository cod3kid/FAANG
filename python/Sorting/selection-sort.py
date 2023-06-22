def selectionSort(nums):

    for i in range(len(nums)):
        lowest = i
        for j in range(i+1,len(nums)):
            if nums[lowest] > nums[j]:
                lowest = j

        swap = nums[i]
        nums[i] = nums[lowest]
        nums[lowest] = swap

    return nums

nums = [5,3,2,10,99,456,32,21,1,4]
print(selectionSort(nums))