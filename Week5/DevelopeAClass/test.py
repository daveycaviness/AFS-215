import pytest
from develope import String

# def testCanCall():
#     Strings()
#
# def testCanAdd():
#     test = String()
#     assert test.push('Hello') == 'Hello was added.'
#
# def testCanSearch():
#     test = String()
#     test.push('Hello')
#     assert test.search('Hello') == 'Hello was found at index 0.'
#
# def testCanEvaluate():
#     test = String()
#     test.push('Hello')
#     test.push('World')
#     assert test.evaluate() == ['Hello', 'World']


@pytest.fixture
def test():
    test = String()
    test.push('Hello')
    return test

def testCanCall():
    String()

def testCanAdd(test):
    assert test.push('World') == 'World was added to your list.'

def testCanSearch(test):
    assert test.search('Hello') == 'Hello was found at index 0 of your list.'

def testCanEvaluate(test):
    assert test.evaluate() == ['Hello']