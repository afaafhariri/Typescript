"use strict";
/*
    GENERIC FUNCTIONS
    - Generic functions are functions that can work with data of any type.
*/
const genericFunction = (argument) => {
    return argument;
};
//instead using type any, we can use generic type. It is more flexible and safe.
const word = genericFunction("Hello");
const number = genericFunction(10);
const bool = genericFunction(true);
console.log(word);
console.log(number);
console.log(bool);
