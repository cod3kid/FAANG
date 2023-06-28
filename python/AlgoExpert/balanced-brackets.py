def balancedBrackets(string):

    openingBrackets = "({["
    closingBrackets = ")}]"
    check = {")":"(","}":"{","]":"["}
    stack = []
    
    for char in string:

        if char in openingBrackets:
            stack.append(char)
        
        if char in closingBrackets:
            if len(stack) == 0:
                return False
            elif check[char] == stack[-1]:
                 stack.pop()
            else :
                return False



    if len(stack) > 0:
        return False
    
    return True

string  = "([])(){}(())()()"
print(balancedBrackets(string))