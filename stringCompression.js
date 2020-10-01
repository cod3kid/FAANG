function encodeString(str) {

    if (str.length == 1) {
        return str + '1'
    }

    currentChar=str[0]
    result=''
    count = 0

    for (let i = 1; i <= str.length; i++) {
        if (str[i - 1] !== str[i]) {
            count++
            result+=currentChar+count
            count=0
            currentChar=str[i]
        }
        else{
          count++
        }
    }



    return result
}


console.log(encodeString('xzvgggseeetyu'))