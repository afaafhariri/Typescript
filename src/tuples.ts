//tuples are typed arrays with different known types of values at each index
let mytuple: [number, string, boolean];
mytuple = [10, "Hariri", true];
console.log(mytuple); //[ 10, 'Hariri', true ]

mytuple.push("Afaaf");
console.log(mytuple); //[ 10, 'Hariri', true, 'Afaaf' ]

//read-only tuples
let anothertuple: readonly [number, string];
anothertuple = [10, "Messi"];
console.log(anothertuple); //[ 10, 'Messi' ]
//read-only tuples, like such arrays, cannot be edited

//destructuring tuples (check destructuring.ts for more understandings)
let graph: [number, number];
graph = [10, 11];
const [x, y] = graph;
