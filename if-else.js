//Q3. Write a Simple program using if-else statement. 
//Date : 19-09-2022

const a = 5;
//function to check if a is odd or even 
function oddOrEven(a) {
    if (a % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddOrEven(a));
