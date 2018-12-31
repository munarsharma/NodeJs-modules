const mathMod = require("./math-module.js");
const stringMod = require("./stringMod.js");

console.log(mathMod.sum(3, 6));
console.log(mathMod.multiply(2, 5));
console.log(mathMod.divide(20, 5));
console.log(mathMod.square(5));

console.log(stringMod.upperCased("meow"));
console.log(stringMod.firstLetter("meow"));
console.log(stringMod.middleLetter("meow"));
