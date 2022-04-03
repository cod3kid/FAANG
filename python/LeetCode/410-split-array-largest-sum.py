def splitArrayLargestSum(arr):
   left, right = max(arr), sum(arr)
   result = right

   while left <= right:
       mid = left + ((right -1)//2)
       if canSplit(mid):
           result = mid
           right = mid - 1
       else:
           left = mid+1


   def canSplit(largest):
        subArray=0
        curSum = 0


arr = [7,2,5,10,18]
print(splitArrayLargestSum(arr))
