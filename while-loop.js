//Q8. Write A Program using while loop
//Date: 21-09-2022


let a = 0;
let b = 1;
let c = 1;
while (c < 100) {
  console.log(c);
  c = a + b;
  a = b;
  b = c;
}