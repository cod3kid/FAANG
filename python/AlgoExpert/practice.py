def quickSort(arr, left,right):

    if left<right:
       pivotIdx = quickSortHelper(arr,left,right)
       quickSort(arr,left,pivotIdx-1)
       quickSort(arr,pivotIdx+1,right)

    return arr


def quickSortHelper(arr,start,end):
   pivot = arr[start]
   swapIdx = start

   for i in range(start+1,len(arr)):
      if pivot > arr[i]:
         swapIdx+=1
         arr[i],arr[swapIdx] = arr[swapIdx],arr[i]
    
   arr[start],arr[swapIdx] = arr[swapIdx],arr[start]

   return swapIdx
   

nums = [9,5,3,34,21,7,10,1,100]
print(quickSort(nums,0,len(nums)-1))