def romanToInt(s):
   number = 0

   for i in range(len(s)):

     if s[i] == "I":
      number += 1

     if s[i] == "V":
      if s[i - 1] == "I":
        number -= 2

      number += 5 
    

     if s[i] == "X":
      if s[i - 1] == "I":
        number -= 2

      number += 10
    

     if s[i] == "L":
      if s[i - 1] == "X":
        number -= 20
      
      number += 50
    

     if s[i] == "C":
      if s[i - 1] == "X":
        number -= 20
      
      number += 100
    

     if s[i] == "D":
      if s[i - 1] == "C":
        number -= 200
      
      number += 500
    

     if s[i] == "M":
      if s[i - 1] == "C":
        number -= 200
      if i==0:
        number +=200
    
      number += 1000

    
    

   return number


romanNumeral = "MMMCDXC"
print(romanToInt(romanNumeral))
