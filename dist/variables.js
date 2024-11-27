"use strict";
let sum;
let hisName;
let isTrue;
const bro = "Hariri"; //const bro: string = hariri (const variables must assigned)
let variableOne = "Afaaf"; //variables can also be declared inferentially
let variableTwo = "Hariri";
[variableOne, variableTwo] = [variableTwo, variableOne]; //swapping variables
//(cannot swap for type different variables)
//union types allow a variable to hold more than one type of variable
let union;
union = "Hariri";
console.log(union); //Hariri
union = 100;
console.log(union); //100
