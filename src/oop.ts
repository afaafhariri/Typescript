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

//inheritance, constructors & access modifiers
class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }
}
class Cat extends Animal {
  private breed: string;

  constructor(breed: string, species: string) {
    super(species);
    this.breed = breed;
  }

  public details(): string {
    return `This animal species is ${this.species} and the breed is ${this.breed}`;
  }
}

const newAnimal = new Cat("British Short Hair", "Cat");
//console.log(newAnimal); //Cat { species: 'Cat', breed: 'British Short Hair' }
//console.log(newAnimal.details()); //This animal species is Cat and the breed is British Short Hair
