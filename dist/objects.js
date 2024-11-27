"use strict";
// object declaration
let personObject = {
    name: "Afaaf",
    age: 12,
};
console.log(personObject);
//accessing values
console.log(personObject.age);
//type annotations
let personObject2 = {
    firstName: "Afaaf",
    lastName: "Hariri",
    age: 22,
    isEmployed: false,
}; //omit declarations if you want
//optional properties
let personObject3 = {
    name: "Afaaf",
}; //you can omit age if you want
let person1 = {
    name: "Lionel",
    age: 38,
    about: "Footballer @InterMiamiCF", //leave about if you want
};
let newPlayer = {
    name: "Cristiano",
    age: 39,
    about: "Footballer @RealMadridCF",
};
//multilayered properties
const multiLayered = {
    name: "You",
    details: {
        age: 21,
        about: "Unemployed",
    },
};
//accessing multi layered properties
//console.log(multiLayered.details.about);
let multiLayeredAnother;
