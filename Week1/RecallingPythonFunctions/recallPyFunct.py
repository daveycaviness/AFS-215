class dataTypes:
    def __init__(self):
        self.types = []

    def add(self, type):
        self.types.append(type)

    def addNumber(self, number):
        self.add(int(number))

    def addString(self, string):
        self.add(str(string))

    def addDictionary(self, list):
        self.add({list[i]: list[i + 1] for i in range(0, len(list), 2)})

    def addTuple(self, tpl):
        self.add(tuple(tpl))

    def returnInput(self):
        return self.types

myInput = dataTypes()

myInput.addNumber('100')
myInput.addString(200)
myInput.addDictionary(["a", 1, "b", 2, "c", 3])
myInput.addTuple("Hello World")

print(myInput.returnInput())