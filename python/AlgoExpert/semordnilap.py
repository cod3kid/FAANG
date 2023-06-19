def semordnilap(words):
    lookup = {}
    output = []
    for word in words:
        if word[::-1] not in lookup:
            lookup[word]=1
        else:
            del lookup[word[::-1]] 
            output.append([word[::-1],word])

    return output

# O(n*m) n is the length of words array and m is the length of the longest word
words = ["diaper", "abc", "test", "cba", "repaid"]
print(semordnilap(words))