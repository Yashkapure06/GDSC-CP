//Q4.  Write a Simple program using if-else-if statement.
//Date : 19-09-2022

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
//function to check if a is greater than b
function greaterThan(a, b) {
    return a > b;
}
//function to check if a is less than b
function lessThan(a, b) {
    return a < b;
}
if (greaterThan(a, b)) {
    console.log("a is greater than b");
}
else if (lessThan(a, b)) {
    console.log("a is less than b");
}
else if (greaterThanOrEqual(a, b)) {
    console.log("a is greater than or equal to b");
}
else if (lessThanOrEqual(a, b)) {
    console.log("a is less than or equal to b");
}
else if (equal(a, b)) {
    console.log("a is equal to b");
}
else if (notEqual(a, b)) {
    console.log("a is not equal to b");
}
else {
    console.log("a is not greater than b");
}
