def isValidSubsequence(arr, sequence):
    seqIdx = 0
    for value in arr:
        if seqIdx == len(sequence):
            break

        if value == sequence[seqIdx]:
            seqIdx+=1

    return seqIdx == len(sequence)

        







arr = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

print(isValidSubsequence(arr,sequence))






