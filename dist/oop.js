"use strict";
//class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}, you are ${this.age} years old`;
    }
}
const personExampleOne = new Person("Hariri", 21);
const personExampleTwo = new Person("Messi", "37");
//console.log(personExampleOne); //Person { name: 'Hariri', age: 21 }
//console.log(personExampleTwo); //Person { name: 'Messi', age: '37' }
//Inheritance & access modifiers
class Animal {
    constructor(species) {
        this.species = species;
    }
    makeSound() {
        return "Meowwwww";
    }
}
class Cat extends Animal {
    constructor(breed, species) {
        super(species);
        this.breed = breed;
    }
    details() {
        return `This animal species is ${this.species} and the breed is ${this.breed}`;
    }
}
const newAnimal = new Cat("Cat", "British Short Hair");
