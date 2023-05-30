def fourNumberSum(array, targetSum):
   output = []
   allPairs = {}
   for i in range(len(array)):
      for j in range(len(array)):
         for k in range(len(array)):
            for m in range(len(array)):
                stringForm = ', '.join(str(i) for i in sorted([array[i],array[j],array[k],array[m]]))
                if i!=j and i!=k and i!=m and j!=k and j!=m and k!=m and array[i]+array[j]+array[k]+array[m] == targetSum and stringForm not in allPairs :
                   allPairs[stringForm] = 1
                   output.append(sorted([array[i],array[j],array[k],array[m]]))

   return output


array = [7, 6, 4, -1, 1, 2]
targetSum = 16
print(fourNumberSum(array,targetSum))
