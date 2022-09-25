const User = require('./user.js');

const guest1 = new User(15, 46);
const guest2 = new User(2, 5, 'Keith', 37);

console.log(guest1.greeting());
console.log(guest1.add());
console.log(guest1.sub());
console.log(guest1.mult());
console.log(guest1.div());
console.log(guest1.add_str());

console.log(guest2.greeting());
console.log(guest2.add());
console.log(guest2.sub());
console.log(guest2.mult());
console.log(guest2.div());
console.log(guest2.add_str());