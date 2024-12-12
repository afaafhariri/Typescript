//class
class Person {
  name: string;
  age: number | string;

  constructor(name: string, age: number | string) {
    this.name = name;
    this.age = age;
  }
  greet(): string {
    return `Hello ${this.name}, you are ${this.age} years old`;
  }
}

const personExampleOne = new Person("Hariri", 21);
const personExampleTwo = new Person("Messi", "37");
//console.log(personExampleOne); //Person { name: 'Hariri', age: 21 }
//console.log(personExampleTwo); //Person { name: 'Messi', age: '37' }

//Inheritance & access modifiers
class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }
  public makeSound(): string {
    return "Meowwwww";
  }
}
class Cat extends Animal {
  private breed: string;

  constructor(breed: string, species: string) {
    super(species);
    this.breed = breed;
  }

  private details(): string {
    return `This animal species is ${this.species} and the breed is ${this.breed}`;
  }
}

const newAnimal = new Cat("Cat", "British Short Hair");
