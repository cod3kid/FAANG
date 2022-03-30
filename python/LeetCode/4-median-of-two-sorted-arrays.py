def median(arr1,arr2):
  
 arr3 = arr1+arr2
 arr3.sort()
 array_length = len(arr3)

 if array_length %2==0:
     return  (arr3[array_length//2]+arr3[(array_length//2)-1])/2
 else:
     return arr3[array_length//2]
   
arr1 = [1,2]
arr2 = [3,4]
print(median(arr1,arr2))
