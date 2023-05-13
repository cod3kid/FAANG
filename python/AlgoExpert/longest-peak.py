def longestPeak(array):

    peakFound = False
    peakValue = 0
    for i in range(len(array)-1):

        if array[i] > array[i+1]:
            print(array[i])
            peakFound = True
            peakValue = array[i]
        
        if array[i] > array[i+1] and peakFound:
            return False
        
        if peakFound and i == 0:
            return False
        
        if not peakFound and i+1 == len(array):
            return False

    return peakValue

array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
print(longestPeak(array))
