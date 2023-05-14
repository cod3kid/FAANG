def arrayOfProducts(array):
    
    output = []
    for i in range(len(array)):
        currProduct = 1
        for j in range(len(array)):
            if i != j:
              currProduct *= array[j]
        output.append(currProduct)
    return output




arr = [5, 1, 4, 2]
print(arrayOfProducts(arr))
