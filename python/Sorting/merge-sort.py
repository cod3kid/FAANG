import math

def merge(arr1,arr2):
    leftIdx = 0
    rightIdx=0
    result = []
    while leftIdx < len(arr1) and rightIdx < len(arr2):
        if arr1[leftIdx] > arr2[rightIdx]:
            result.append(arr2[rightIdx])
            rightIdx+=1
        else:
            result.append(arr1[leftIdx])
            leftIdx+=1

    while leftIdx < len(arr1):
            result.append(arr1[leftIdx])
            leftIdx+=1


    while rightIdx < len(arr2):
            result.append(arr2[rightIdx])
            rightIdx+=1
    
    return result

def mergeSort(arr):
     
     if len(arr) <=1: 
          return arr
     
     mid = math.floor(len(arr)/2)

     left = mergeSort(arr[:mid])
     right = mergeSort(arr[mid:])
     return merge(left,right)


arr = [57, 34, 56,1, 32, 17, 99,2, 876, 456]
print(mergeSort(arr))
# Learn how to code mergeSort with the help of Auxilary array so that
# we can reduce the space complexity from O(nlogn) to O(n)