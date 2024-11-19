//destructuring arrays
let person = ["Hariri", "Messi", "Ronaldo"];
/*
let [first, second, third] = person; //values are assigned in order
console.log(first); //Hariri
console.log(second); //Messi
console.log(third); //Ronaldo

let [first, , third] = person; //skipping or ignoring
console.log(first); //Hariri
console.log(third); //Ronaldo

let [first, ...rest] = person; //catch the rest using rest operator (...)
console.log(first); //Hariri
console.log(rest); // Messi, Ronaldo

//setting value if array elements do not exist
let [first, second, third, fourth = "Afaaf"] = person;
console.log(fourth); //Afaaf

//destructuring in functions
const arrayDeStructure = (array: string[]) => {
  const [first, ...rest] = array;
  console.log(first);
  console.log(rest);
};
arrayDeStructure(person);
*/
