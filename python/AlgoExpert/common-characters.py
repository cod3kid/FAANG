def commonCharacters(strings):
    lookup={}
    output = []
    for char in strings[0]:
        if char not in lookup:
            lookup[char]=1

    for i in range(1,len(strings)):
        for char in strings[i]:
            if char in lookup and lookup[char]==i:
                lookup[char]+=1


    for el,val in lookup.items():
       if len(strings) == val:
           output.append(el)

    return output


strings = ["abc", "bcd", "cbad"]
print(commonCharacters(strings))