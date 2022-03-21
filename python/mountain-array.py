
def isMountainArray(arr):

    isPeakFound = False
    if len(arr) < 3:
        return False

    for i in arr:
        if arr[i-1] == arr[i] :
            return False
        print(i)
        if isPeakFound == True and arr[i-1 ] > arr[i]:
            return False

        if arr[i] < arr[i-1]:
            isPeakFound = True

    return True



num = [0, 1, 2, 3, 4, 5, 2, 1]
print(isMountainArray(num))