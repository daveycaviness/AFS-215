const NumInput = require('./numInput.js')

const input1 = new NumInput(9);
const input2 = new NumInput(7);
const input3 = new NumInput(21);
const input4 = new NumInput(34);
const input5 = new NumInput("20");
const input6 = new NumInput(true);

console.log(input1.output());
console.log(input2.output());
console.log(input3.output());
console.log(input4.output());
console.log(input5.output());
console.log(input6.output());
