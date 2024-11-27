"use strict";
const calculateCallback1 = (x, y, operation //the callback function will handle and return a number
) => {
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
const calculateCallback2 = (x, y, operation //optional callback unimplemented
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
const clearCallBack = (x, y, callbackfunction) => {
    return callbackfunction(x, y);
};
const clearOptionalCallBack = (x, y, callbackfunction) => {
    if (x > 1) {
        if (callbackfunction) {
            return callbackfunction(x, y);
        }
        else {
            return;
        }
    }
    else {
        console.log(`x = ${x} which is smaller than 0`);
    }
};
//used in eventListeners
/*
document.addEventListener('click', (event) => {
  console.log('Clicked!', event);
});
*/
