const expect = require('chai').expect;
const ArrayList = require('../Array.js');

beforeEach(() => {
    array = new ArrayList();
    array.push(23);
    array.push('twenty');
    array.push(true);
})

afterEach(() => {
    console.log('This test is Complete!')
})

before(() => {
    console.log('Test is about to begin!');
})

after(() => {
    console.log('All test are complete!');
})

it('failing test', () => {
    expect(array.data[0]).to.equal('23');
})

it('push complete', () => {
    expect(array.push('Hello')).to.equal('Hello was added.');
})

it('call array', () => {
    expect(array.getArr()).to.deep.equal([23, 'twenty', true]);
})

it('delete item', () => {
    expect(array.delete(23)).to.equal('23 was removed.');
})

it('search item', () => {
    expect(array.search(23)).to.equal(true);
})

it('delete error', () => {
    expect(array.delete('Audi')).to.equal('Error: No element found for Audi.');
})

it('search error', () => {
    expect(array.search('picado')).to.equal('Error: No element found for picado.');
})