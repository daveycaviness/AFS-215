const greet = (input) => {
    switch(true) {
        case (typeof input !== 'number'):
            return 'Error: Please input a numerical value.'
        case (input % 3 === 0 && input % 7 !== 0):
            return 'Good Morning';
        case (input % 3 !== 0 && input % 7 === 0):
            return 'Good Afternoon';
        case (input % 3 === 0 && input % 7 === 0):
            return 'Good Evening';
        case (input % 3 !== 0 && input % 7 !== 0):
            return `${input}`;
    }
}

module.exports = greet;