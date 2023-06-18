def firstNonRepeatingCharacter(string):

    lookup ={}

    for char in string:
        if char not in lookup:
            lookup[char]=1
        else:
            lookup[char]+=1

    # Alternate way
    # for key,value in lookup.items():
    #     if value == 1:
    #         return string.index(key)
        
    for i in range(len(string)):
        if lookup[string[i]]==1:
            return i
        
    return -1


string = "abcdcaf"
print(firstNonRepeatingCharacter(string))