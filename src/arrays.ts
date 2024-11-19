let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Afaaf", "Hariri", "Messi", "Cristiano"];

console.log(numbers); //[ 1, 2, 3, 4, 5 ]
console.log(names); //[ 'Afaaf', 'Hariri', 'Messi', 'Cristiano' ]
/*
numbers.push(10);
console.log(numbers); //[ 1, 2, 3, 4, 5, 10 ]
numbers.pop();
console.log(numbers); //[ 1, 2, 3, 4, 5 ]
*/

const lowerCase = names.forEach((name: string) => {
  name.toLowerCase();
});
console.log(lowerCase); //content displayed in next line

console.log();

const lowerCaseArray = names.map((name: string) => {
  return name.toLowerCase();
});
console.log(lowerCaseArray); //[ 'afaaf', 'hariri', 'messi', 'cristiano' ]

//arrays can be inferentially declared
let someNames = ["Hariri", "Messi", "Ronaldo"];
