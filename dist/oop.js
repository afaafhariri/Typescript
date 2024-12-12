"use strict";
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
console.log(personExampleOne); //Person { name: 'Hariri', age: 21 }
console.log(personExampleTwo); //Person { name: 'Messi', age: '37' }
