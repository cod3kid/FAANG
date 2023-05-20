def zeroSumSubarray(nums):
    sums = set([0])
    currentSum = 0

    for num in nums:
        currentSum+=num
        if currentSum in sums:
            return True
        sums.add(currentSum)
    return False



nums = [-5,-5,2,3,-2]
print(zeroSumSubarray(nums))
