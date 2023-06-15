def caesarCipherEncryptor(string, key):
    letter = "a"
    alphabets = ['a']
    for i in range(25):
        letter = chr(ord(letter)+1)
        alphabets.append(letter)

    newString =""
    for letter in string:
           newString+=alphabets[((ord(letter)+key)-97)%26]

    return newString

string ="xyz"
key=2
print(caesarCipherEncryptor(string,key))