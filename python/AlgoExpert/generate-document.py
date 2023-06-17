def generateDocument(characters, document):

    lookup ={}

    for char in characters:
        if char not in lookup:
            lookup[char]=1
        else:
            lookup[char]+=1

    for char in document:
        if char not in lookup or lookup[char]<=0:
            return False
        else:
            lookup[char]-=1

    return True


characters =  "aheaolabbhb"
document ="hello"
print(generateDocument(characters,document))