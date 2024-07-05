"use strict";
const repeatString = (x, y) => {
    let newString = "";
    if (y > 0) {
        for (let i = 1; i <= y; i++) {
            newString = newString + x;
        }
    }
    return newString;
};
console.log(repeatString("Hello!", 3));
