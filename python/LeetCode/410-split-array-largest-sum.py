def splitArrayLargestSum(arr):
   left, right = max(arr), sum(arr)
   result = right

   while left <= right:
       mid = left + ((right -1)//2)


arr = [7,2,5,10,18]
print(splitArrayLargestSum(arr))
