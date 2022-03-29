def longestSubString(s):

    substrings = {}

    for i in range(len(s)):
        for j in range(len(s)+1):
            tempSubstring={}
            if i < j :
                if s[i:j] in substrings:
                    substrings[s[i:j]]+=1
                else:
                    substrings[s[i:j]]=1



            
    return substrings








s='abcabcbb'
print(longestSubString(s))







