const calculateCallback1 = (
  x: number,
  y: number,
  operation: (a: number, b: number) => number //the callback function will handle and return a number
): number => {
  console.log("calculating ...");
  return operation(x, y);
};
//must declare the type a callback will handle. It is called type signature.
//callback function's implementation will be done later
const addition = calculateCallback1(4, 5, (x, y) => {
  return x + y;
});
//console.log(addition); // 9

const multiply = calculateCallback1(2, 5, (a, b) => {
  return a * b;
});
//console.log(multiply); // 10

//optional callbacks
//you can either call or leave it
const calculateCallback2 = (
  x: number,
  y: number,
  operation?: (a: number, b: number) => void //optional callback unimplemented
): void => {
  if (operation) {
    if (x > 0) {
      return operation(x, y);
    } else return;
  } else {
    console.log(`printing ${x} and ${y} as no operation is executed`);
  }
};
/*
console.log(
  calculateCallback(2, 4, (x, y) => {
    return x * y;
  })
);
*/

// making callbacks more readable using 'type'
type operation = (a: number, b: number) => number;
const clearCallBack = (
  x: number,
  y: number,
  callbackfunction: operation
): number => {
  return callbackfunction(x, y);
};

//optional callback using types
type optionalOperation = (a: number, b: number) => void;
const clearOptionalCallBack = (
  x: number,
  y: number,
  callbackfunction?: optionalOperation
): void => {
  if (x > 1) {
    if (callbackfunction) {
      return callbackfunction(x, y);
    } else {
      return;
    }
  } else {
    console.log(`x = ${x} which is smaller than 0`);
  }
};
