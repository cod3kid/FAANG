def missingNumbers(nums):
    includedNums = set(nums)
    output = []

    for i in range(1,len(nums)+3):
        if i not in includedNums:
            output.append(i)

    return output


nums = [1,4,3]
print(missingNumbers(nums))