// object declaration
let personObject = {
  name: "Afaaf",
  age: 12,
};
console.log(personObject);
//accessing values
console.log(personObject.age);

//type annotations
let personObject2: {
  firstName: string;
  lastName: string;
  age: number;
  isEmployed: boolean;
} = {
  firstName: "Afaaf",
  lastName: "Hariri",
  age: 22,
  isEmployed: false,
}; //omit declarations if you want

//optional properties
let personObject3: { name: string; age?: number } = {
  name: "Afaaf",
}; //you can omit age if you want

//using interfaces
interface person {
  name: string;
  age: number;
  about?: string;
}
let person1: person = {
  name: "Lionel",
  age: 38,
  about: "Footballer @InterMiamiCF", //leave about if you want
};

//using intersections
type A = { name: string };
type B = { age: number };
type C = { about?: string }; //optional type

type Player = A & B & C;

let newPlayer: Player = {
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

let multiLayeredAnother: {
  name: string;
  details: { age: number; about?: string }; //about becomes optional
};
