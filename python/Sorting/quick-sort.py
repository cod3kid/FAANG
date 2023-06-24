def quickSortHelper(arr,start,end):
    pivot = arr[start]
    swapIdx = start 

    for i in range(start+1,len(arr)):
        if pivot > arr[i]:
            swapIdx+=1
            arr[swapIdx],arr[i]=arr[i],arr[swapIdx]

    arr[start],arr[swapIdx]=arr[swapIdx],arr[start]
    return swapIdx

def quickSort(arr,left,right):

    if left<right:
        pivotIdx = quickSortHelper(arr,left,right)
        quickSort(arr,left,pivotIdx-1)
        quickSort(arr,pivotIdx+1,right)
    
    return arr

arr = [100,-3,-4,4,8,2,1,5,7,6,3]
print(quickSort(arr,0,len(arr)-1))