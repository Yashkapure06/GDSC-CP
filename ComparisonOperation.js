// Q2 Write simple program using comparison operator.
//Date : 18-09-2022

const a = 5;
const b = 15;
//function to check if a is greater than b
function greaterThan(a, b) {
    return a > b;
}
//function to check if a is less than b
function lessThan(a, b) {
    return a < b;
}
//function to check if a is greater than or equal to b
function greaterThanOrEqual(a, b) {
    return a >= b;
}

//function to check if a is less than or equal to b
function lessThanOrEqual(a, b) {
    return a <= b;
}
//function to check if a is equal to b   
function equal(a, b) {
    return a == b;
}
//function to check if a is not equal to b
function notEqual(a, b) {
    return a != b;
}
console.log(greaterThan(a, b));
console.log(lessThan(a, b));
console.log(greaterThanOrEqual(a, b));
console.log(lessThanOrEqual(a, b));
console.log(equal(a, b));
console.log(notEqual(a, b));
