def splitArrayLargestSum(nums, m):
   def canSplit(largest):
        subArray=0
        curSum = 0
        for n in nums:
            curSum+=n
            if curSum > largest:
                subArray+=1
                curSum=n
        return subArray+1 <=  m

   left, right = max(nums), sum(nums)
   result = right

   while left <= right:
       mid = left + ((right -1)//2)
       if canSplit(mid):
           result = mid
           right = mid - 1
       else:
           left = mid+1




arr = [7,2,5,10,18]
print(splitArrayLargestSum(arr,2))
