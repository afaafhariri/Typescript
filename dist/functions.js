"use strict";
const calculate = (num1, num2) => {
    return num1 * num2;
};
/*
let value = calculate(1, 2);
console.log(value); //output:2
// console.log(calculate(4, 2)); //output:8 (we can print both ways)
*/
const circleArea = (radius) => {
    return 2 * Math.PI * radius * radius;
};
//console.log(circleArea(7.7));
const greeting = (name, age) => {
    return `Hello ${name}, you are ${age} years old`;
};
console.log(greeting("hariri", 15));
//optional parameters
const greetingAgain = (name, age) => {
    return age ? `Hello ${name}, you are ${age} years old` : `Hello ${name}`;
};
console.log(greetingAgain("Hariri"));
//rest parameters
const restUsage = (separator, ...names) => {
    return names.join(separator);
};
console.log(restUsage("+", "Hariri", "Afaaf", "Messi"));
