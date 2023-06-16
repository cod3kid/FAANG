def runLengthEncoding(string):
    output = ""
    currentChar = string[0]
    currentCharCount = 0

    for char in string:
        if char != currentChar or currentCharCount == 9:
            output+=str(currentCharCount)+currentChar
            currentChar = char
            currentCharCount=1
        else:
            currentCharCount+=1

    output+=str(currentCharCount)+string[-1]
    return output


string = "aA"
print(runLengthEncoding(string))