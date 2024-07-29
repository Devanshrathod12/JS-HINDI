let score  = 400;
console.log(score);

let balance = new Number(100);
console.log(balance.toFixed(3));
console.log(balance.toString().length);

let yobalance = 1232.58584;
console.log(yobalance.toPrecision(3));

let mybalance = 10000000;
console.log(mybalance.toLocaleString()); 


/////////////////////////// maths ///////////////////////////////

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)