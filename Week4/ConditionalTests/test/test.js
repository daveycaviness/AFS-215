const expect = require('chai').expect;
const greet = require('../conditional.js');

it('expect failing test', () => {
    expect(greet(21)).to.equal('Good Day');
})

it ('expect passing test', () => {
    const flip = Math.floor(Math.random() * 2 + 1);
    
    const randNum = () => {
        if (flip === 1) {
            return Math.floor(Math.random() * 30 + 1)
        }
        else if (flip === 2) {
            return `${Math.floor(Math.random() * 30 + 1)}`
        }
    }
    
    const num = randNum();
    if (typeof num !== 'number') {
        expect(greet(num)).to.equal('Error: Please input a numerical value.');
    }
    else if (num % 3 === 0 && num % 7 !== 0) {
        expect(greet(num)).to.equal('Good Morning');
    }
    else if (num % 3 !== 0 && num % 7 === 0) {
        expect(greet(num)).to.equal('Good Afternoon');
    }
    else if (num % 3 === 0 && num % 7 === 0) {
        expect(greet(num)).to.equal('Good Evening');
    }
    else if (number % 3 !== 0 && num % 7 !== 0) {
        expect(greet(num)).to.equal(`${num}`);
    }
})