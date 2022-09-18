from Fizzbuzz import PepCok

numParsed = 15
def test1():
    assert PepCok(numParsed) == 1

def test2():
    assert PepCok(numParsed) == 2

def testPepsi():
    assert PepCok(numParsed) == 'Pepsi'

def testCoke():
    assert PepCok(numParsed) == 'Coke'

def testPepCok():
    assert PepCok(numParsed) == 'PepCok'