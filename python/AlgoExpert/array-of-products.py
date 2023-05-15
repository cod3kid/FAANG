# O(n^2)
def arrayOfProductsNaive(array):
    
    output = []
    for i in range(len(array)):
        currProduct = 1
        for j in range(len(array)):
            if i != j:
              currProduct *= array[j]
        output.append(currProduct)
    return output

# O(n)
def arrayOfProducts(array):
    leftOutputArr = [1 for _ in range(len(array))]
    rightOutputArr = [1 for _ in range(len(array))]
    output = [1 for _ in range(len(array))]
   
    product = 1
    for i in range(len(array)):
       leftOutputArr[i] = product
       product *= array[i]

    product = 1
    for i in reversed(range(len(array))):
       rightOutputArr[i] = product
       product *= array[i] 

    for i in range(len(array)):
       output[i] = leftOutputArr[i] * rightOutputArr[i]

    return output


arr = [5, 1, 4, 2]
print(arrayOfProducts(arr))
