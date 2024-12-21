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
/*
console.log(word);
console.log(number);
console.log(bool);
*/
