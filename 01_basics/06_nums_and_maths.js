const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 208.876

console.log(otherNumber.toPrecision(5))


const hundreds = 1000000

console.log(hundreds.toLocaleString()); //Us k accordding

console.log(hundreds.toLocaleString('en-In')); //acc to India

// +++++++++++++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++

console.log(Math);

// positive positive rehta hai but neg positive me convert hota hai
console.log(Math.abs(-4));
console.log(Math.round(4.6));
// floor
// ceil
// min max 

console.log(Math.random());
console.log((Math.floor(Math.random() * 1000000 + 1)));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));

console.log(Math.floor(Math.random() * 11 + 10));

 










