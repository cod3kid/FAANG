

function first_last_pos(arr,x)
{
start=0
end=arr.length-1
first_pos=-1
while(start<=end)
{
  mid=Math.floor(start+(end-start)/2)
  if(arr[mid]==x)
  {
    first_pos=mid
    end=mid-1
  }
  else if(arr[mid]>x)
  {
      end=mid-1
  }
  else
  {
    start=mid+1
  }

}
return first_pos
}

array=[1,2,3,4,4,5,5,5,7,8,8,8,8,9,23,45,78]
target=8

first_occ=first_last_pos(array,target)
last_occ=first_last_pos(array,target+1)-1


console.log("First: "+first_occ)
console.log("Last: "+last_occ)













