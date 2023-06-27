def quickselect(array, k):
    # Write your code here.
    return sorted(array)[k-1]

nums = [8, 5, 2, 9, 7, 6, 3]
print(quickselect(nums,3))