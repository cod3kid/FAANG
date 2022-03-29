
def isMountainArray(arr):

        isPeakFound = False
        if len(arr) < 3:
          return False

        for i in range(len(arr)-1):
            if  arr[i] == arr[i+1]:
              return False
            
            if isPeakFound == True and arr[i] < arr[i+1]:
              return False

            if arr[i] > arr[i+1]:
               isPeakFound= True

            if i==0 and  isPeakFound:
               return False
            
            if i+2 == len(arr) and not isPeakFound:
               return False
    
        return True



num = [0, 1, 2, 3, 4, 5, 2, 1]
print(isMountainArray(num))