/* 
    GENERIC FUNCTIONS
    - Generic functions are functions that can work with data of any type.
*/
const genericFunction = <WhateverType>(
  argument: WhateverType
): WhateverType => {
  return argument;
};
//instead using type any, we can use generic type. It is more flexible and safe.
const word = genericFunction<string>("Hello");
const number = genericFunction<number>(10);
const bool = genericFunction<boolean>(true);
const bunchOfNumbers = genericFunction<number[]>([1, 2, 3, 4, 5]);
/*
console.log(word);
console.log(number);
console.log(bool);
console.log(bunchOfNumbers);
*/

/*
    GENERIC INTERFACES
    - Generic interfaces are interfaces that can work with data of any type.
*/
interface GenericInterface<T> {
  (argument: T): T;
}
let identity: GenericInterface<number[]> = (arg: number[]): number[] => {
  return arg;
};
let anotherIdentity: GenericInterface<string> = (arg: string): string => {
  return arg;
};
//console.log(identity([1, 2, 3, 4, 5]));
//console.log(anotherIdentity("Hello"));

// ** writing the type of the generic function in the interface helps to make the code more readable.

//or
interface GenericInterface2 {
  <T>(argument: T): T;
}
let identity2: GenericInterface2 = <T>(arg: T): T => {
  return arg;
};
//console.log(identity2([1, 2, 3, 4, 5]));
//console.log(identity2("Hello"));

/*
    GENERIC CONSTRAINTS
    - Generic constraints are used to restrict the types that can be used with generic functions.
    - we can use the extends keyword to restrict the types that can be used with generic functions.
*/

let constraintFunction = <Type extends { length: number }>(
  item: Type
): Type => {
  console.log(item.length);
  return item;
};

interface Lengthwise {
  length: number;
}
let genericFunctionLength = <Type extends Lengthwise>(
  parameter: Type
): Type => {
  console.log(parameter.length);
  return parameter;
};

//generic parameters can have default values

const defaultGenericFunction = <Type = string>(parameter: Type): Type => {
  return parameter;
};
//string is the default type of the generic function if no type is provided.
console.log(defaultGenericFunction("Hello"));
let numberResult = defaultGenericFunction<number>(10);
console.log(numberResult);
//default values can act as fallbacks when a type is not provided.

//generic interface with default type
interface DefaultGenericInterface<Type = string> {
  (parameter: Type): Type;
}
let defaultIdentity: DefaultGenericInterface = (arg: string): string => {
  return arg;
};
let defaultIdentity2: DefaultGenericInterface<number> = (
  arg: number
): number => {
  return arg;
};
/*
console.log(defaultIdentity("Hello"));
console.log(defaultIdentity2(10));
*/
