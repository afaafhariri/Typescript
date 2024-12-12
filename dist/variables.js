"use strict";
//explicit declaration
let sum;
let hisName;
let isTrue;
//implicit declaration
const bro = "Hariri"; //const bro: string = hariri (const variables must be assigned in the beginning)
let variableOne = "Afaaf";
let variableTwo = "Hariri";
[variableOne, variableTwo] = [variableTwo, variableOne]; //swapping variables
//(cannot swap for type different variables)
//union types allow a variable to hold more than one type of variable
let union;
union = "Hariri";
//console.log(union); //Hariri
union = 100;
//console.log(union); //100
//literal types
let literal;
