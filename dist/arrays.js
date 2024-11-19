"use strict";
let numbers = [1, 2, 3, 4, 5];
let names = ["Afaaf", "Hariri", "Messi", "Cristiano"];
console.log(numbers); //[ 1, 2, 3, 4, 5 ]
console.log(names); //[ 'Afaaf', 'Hariri', 'Messi', 'Cristiano' ]
/*
numbers.push(10);
console.log(numbers); //[ 1, 2, 3, 4, 5, 10 ]
numbers.pop();
console.log(numbers); //[ 1, 2, 3, 4, 5 ]
*/
const lowerCase = names.forEach((name) => {
    name.toLowerCase();
});
console.log(lowerCase);
const lowerCaseArray = names.map((name) => {
    return name.toLowerCase();
});
console.log(lowerCaseArray);
//arrays can be inferentially declared
let someNames = ["Hariri", "Messi", "Ronaldo"];
