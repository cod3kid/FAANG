def intToRoman(num):
   result = ''
   mappedValues = {
     1000:'M',
     900:'CM',
    500:'D',
    400:'CD',
    100:'C',
    90:'XC',
     50:'L',
     40:'XL',
            10:'X',
            9:'IX',
               5:'V',
               4:'IV',
                    1:'I',
  }

   for key,value in mappedValues.items():
     if num//key:
         count = num // key
         result+= value*count
   
     num= num%key

   return result
num = 9
print(intToRoman(num))
