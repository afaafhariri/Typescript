"use strict";
//creating variadic functions
//When you want to handle unlimited arguments of same type
const stringJoiner = (separator, ...string) => {
    return string.join(separator);
};
//console.log(stringJoiner("+", "Hariri", "Afaaf", "Martin")); //Hariri+Afaaf+Martin
//indefinite numbers of arguments
const indefiniteRest = (...numbers) => {
    return numbers.map((number) => number * number);
};
console.log(indefiniteRest(1, 2, 3, 4, 5, 6, 7));
console.log(indefiniteRest(123, 3, 121, 32, 12, 33, 6));
const anything = (...anyParameter) => { }; //Array gets any type of parameters
