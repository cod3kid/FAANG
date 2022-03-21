s=['eat','tea','tan','ate','nat','bat']
finalResult=[]
for(i in s)
{
    flag=false
    temp=s[i].split('').sort().join('')

  if(i==0)
  {
    finalResult.push([s[i]])
  }
  else
  {
    finalResult.forEach(element => {
    compVar=element[0].split('').sort().join('')
      if(temp==compVar && element.length>0)
      {
        element.push(s[i])
        flag=true
      }
   
    });
    if(flag==false)
    {
        finalResult.push([s[i]])
    }
  }
  
}

console.log(finalResult)