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
const bunchOfNumbers = genericFunction([1, 2, 3, 4, 5]);
let identity = (arg) => {
    return arg;
};
let anotherIdentity = (arg) => {
    return arg;
};
let identity2 = (arg) => {
    return arg;
};
//console.log(identity2([1, 2, 3, 4, 5]));
//console.log(identity2("Hello"));
/*
    GENERIC CONSTRAINTS
    - Generic constraints are used to restrict the types that can be used with generic functions.
    - we can use the extends keyword to restrict the types that can be used with generic functions.
*/
let constraintFunction = (item) => {
    console.log(item.length);
    return item;
};
let genericFunctionLength = (parameter) => {
    console.log(parameter.length);
    return parameter;
};
//generic parameters can have default values
const defaultGenericFunction = (parameter) => {
    return parameter;
};
//string is the default type of the generic function if no type is provided.
console.log(defaultGenericFunction("Hello"));
let numberResult = defaultGenericFunction(10);
console.log(numberResult);
let defaultIdentity = (arg) => {
    return arg;
};
let defaultIdentity2 = (arg) => {
    return arg;
};
/*
console.log(defaultIdentity("Hello"));
console.log(defaultIdentity2(10));
*/
