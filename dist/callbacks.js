"use strict";
/*
const calculateCallback = (
  x: number,
  y: number,
  operation: (a: number, b: number) => number //the callback function will handle and return a number
): number => {
  return operation(x, y);
};
//must declare the type a callback will handle. It is called type signature.
//callback function's implementation will be done later
const addition = calculateCallback(4, 5, (x, y) => {
  return x + y;
});
//console.log(addition); // 9

const multiply = calculateCallback(2, 5, (a, b) => {
  return a * b;
});
//console.log(multiply); // 10
*/
//optional callbacks
const calculateCallback = (x, y, operation //optional callback unimplemented
) => {
    if (operation) {
        if (x > 0) {
            return operation(x, y);
        }
        else
            return;
    }
    else {
        console.log(`printing ${x} and ${y} as no operation is executed`);
    }
};
console.log(calculateCallback(2, 4, (x, y) => {
    return x * y;
}));
