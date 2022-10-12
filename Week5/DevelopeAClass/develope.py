class String:
    def __init__(self):
        self.list = []

    def push(self, str):
        self.list.append(str)
        return f'{str} was added to your list.'

    def search(self, str):
        try:
            results = self.list.index(str)
            return f'{self.list[results]} was found at index {results} of your list.'
        except ValueError:
            return 'No matching string found.'

    def evaluate(self):
        return self.list