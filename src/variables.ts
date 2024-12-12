//explicit declaration
let sum: number;
let hisName: string;
let isTrue: boolean;

//implicit declaration
const bro = "Hariri"; //const bro: string = hariri (const variables must be assigned in the beginning)
let variableOne = "Afaaf";
let variableTwo = "Hariri";

[variableOne, variableTwo] = [variableTwo, variableOne]; //swapping variables
//(cannot swap for type different variables)

//union types allow a variable to hold more than one type of variable
let union: string | number;
union = "Hariri";
//console.log(union); //Hariri
union = 100;
//console.log(union); //100

//literal types
let literal: "up" | "right" | "down" | "left";
