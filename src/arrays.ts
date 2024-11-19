let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Afaaf", "Hariri", "Messi", "Cristiano"];

console.log(numbers); //[ 1, 2, 3, 4, 5 ]
console.log(names); //[ 'Afaaf', 'Hariri', 'Messi', 'Cristiano' ]
/*
numbers.push(10);
console.log(numbers); //[ 1, 2, 3, 4, 5, 10 ]
numbers.pop();
console.log(numbers); //[ 1, 2, 3, 4, 5 ]

//understanding .map()
//map() gets a function as a parameter and executes it on each element of an array
//returns an array

const lowerCaseArray = names.map((name: string) => {
  return name.toLowerCase();
});
console.log(lowerCaseArray); //[ 'afaaf', 'hariri', 'messi', 'cristiano' ]

const multiplicationOfNumber = numbers.map((number: number): number => {
  return number * number;
});
console.log(`Squared numbers array: ${multiplicationOfNumber}`); //[ 1, 4, 9, 16, 25 ]
*/

//understanding .forEach()
//get a function as an argument
//does not return anything but can show side effect like logging each result
const lowerCase = names.forEach((name: string) => {
  console.log(name.toLowerCase()); //content displayed in next line
});

//arrays can be inferentially declared
let someNames = ["Hariri", "Messi", "Ronaldo"];
