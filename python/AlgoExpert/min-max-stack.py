class MinMaxStack:
    def __init__(self):
        self.minMaxStack = []
        self.stack = []

    def peek(self):
       return self.stack[-1]

    def pop(self):
       self.minMaxStack.pop()
       return self.stack.pop()

    def push(self, number):

        newEntry = {"min":number,"max":number}
        if len(self.minMaxStack) > 0:
            newMin  = min(self.minMaxStack[-1]["min"],number)
            newMax =  max(self.minMaxStack[-1]["max"],number)
            newEntry["min"] = newMin
            newEntry["max"] = newMax
        self.minMaxStack.append(newEntry)
        self.stack.append(number)
        

    def getMin(self):
        return self.minMaxStack[-1]["min"]        

    def getMax(self):
        return self.minMaxStack[-1]["max"]        



minMaxInstance = MinMaxStack()
print(minMaxInstance.push(34))
print(minMaxInstance.getMin())
print(minMaxInstance.push(4))
print(minMaxInstance.push(7))
print(minMaxInstance.peek())
print(minMaxInstance.getMin())
print(minMaxInstance.getMax())




