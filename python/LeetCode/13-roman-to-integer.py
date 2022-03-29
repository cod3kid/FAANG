def romanToInt(s):
   result = 0
   mappedValues = {
     'I':1,
     'V':5,
     'X':10,
     'L':50,
     'C':100,
     'D':500,
     'M':1000
  }

   for i in range(len(s)):
     if i + 1 < len(s) and mappedValues[s[i]] < mappedValues[s[i+1]]:
       result-=mappedValues[s[i]]
     else:
       result += mappedValues[s[i]]

   return result


romanNumeral = "MCMXCIV"
print(romanToInt(romanNumeral))
