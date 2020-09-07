//Multiple Pointers Problem with Linear Time Solution O(n)


function countUniqueValues(arr)
{
  i=0
  for(j=1;j<arr.length;j++)
  {
      if(arr[i]!=arr[j])
      {
          i++
          arr[i]=arr[j]
      }
  }

  return i+1
}

arr=[-1,0,1]
console.log(countUniqueValues(arr))