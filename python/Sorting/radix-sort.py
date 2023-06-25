import math

def getCount(num):
    strlen = len(str(num))
    if num < 0:
        return strlen - 1
    return strlen

def getDigit(num,place):
    string = str(num)
    if place >= len(string):
        return 0
    return int(string[::-1][place])

def getMostDigits(arr):
    mostDigits = 0
    for i in range(len(arr)):
        currNumDigits = getCount(arr[i])
        if currNumDigits > mostDigits:
            mostDigits = currNumDigits

    return mostDigits

def radixSort(arr):
    mostDigits = getMostDigits(arr)
    for i in range(mostDigits):
        buckets = [[] for _ in range(1,11)]
        for j in range(len(arr)):
            digit = getDigit(arr[j],i)
            buckets[digit].append(arr[j])
    
        arr = [element for sublist in buckets for element in sublist]

    return arr

arr = [9, 5, 2, 7, 1, 8]
print(radixSort(arr))
