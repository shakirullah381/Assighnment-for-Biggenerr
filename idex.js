"use strict";
// bigginer 1
const names = ["ali", "khan ", "jan"];
console.log(`The content of this arry is ${names}`);
// bigginer 2
const names1 = ["ali", "khan ", "jan"];
names1.unshift('shakir');
console.log(`the content new arry is ${names1} `);
// bigginer 3
const names3 = ["ali", "khan ", "jan"];
names3.pop();
console.log(`the content of remove arry is ${names3}`);
// biggener 4
const names4 = ["ali", "khan ", "jan"];
names4.sort();
console.log(`the sort of the arrry is ${names4}`);
// biggener 5
const names5 = ["ali", "khan ", "jan"];
let i;
for (i = 0; i < names5.length; i++) {
    console.log(names5[i]);
}
