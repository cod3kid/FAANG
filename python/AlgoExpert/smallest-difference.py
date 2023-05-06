# def threeNumberSum(arr, targetSum):

def smallestDifferenceBruteForce(arr1, arr2):
    sortedArr1 = sorted(arr1)
    sortedArr2 = sorted(arr2)

    smallestDiff = sortedArr1[len(sortedArr1)-1] + sortedArr2[len(sortedArr2)-1]
    result = [sortedArr1[len(sortedArr1)-1],arr2[len(sortedArr2)-1]]


    for i in range(len(sortedArr1)):
        for j in range(len(sortedArr2)):
            currentDiff = abs(sortedArr1[i] - sortedArr2[j])
            if currentDiff < smallestDiff:
                smallestDiff = currentDiff
                result = [sortedArr1[i], sortedArr2[j]]

    return result

arr1 = [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123]
arr2 =  [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
# print(threeNumberSumBruteForce(arr, targetSum))
print(smallestDifferenceBruteForce(arr1, arr2))


