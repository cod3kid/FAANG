def isAnagram(str1,str2):

    lookup = {}
    for i in str1:
        if i in lookup:
            lookup[i]+=1
        else:
            lookup[i] =1
    
    for i in str2:
        if i not in lookup:
            False
        else:
            lookup[i]-=1

    return True

str1 = "eat"
str2 = "ate"
print(isAnagram(str1, str2))