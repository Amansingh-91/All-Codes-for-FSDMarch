// types of variables
// var, let and const

// if (true) {
//   var first = 10;
// }
// console.log(first);

// Data Types

/*
Number
String
null
undefined
Array
object
symbols
boolean
*/

let x = 10;
console.log(typeof x);
x = 10.5;
console.log(typeof x);
x = "aman";
console.log(typeof x);
x = null;
console.log(typeof x);
let y = [1, 2, 3];
console.log(typeof y);
let z = false;
console.log(typeof z);

// String Functions

let myString = 'I am a Teacher. My name is "Aman Saini"';

// console.log(myString.toUpperCase());

let myNumber = 123.565545158;

// z = myNumber.toFixed(5);
// console.log(typeof z);

// console.log(z);

z = Number(myString);
console.log(typeof z);
console.log(z);

// Relational Operator
// equality == and ===

x = "123";
y = 123;
z = 123.56;
let a = true;
let b = "1";

console.log(x != y);
console.log(x === y);

console.log(a != b);
console.log(a >= b);

console.log(5 + 2 + "3"); // 73
console.log("5" + 2 + 3); // 56

// Conditional Statement

x = 0;

if (x > 0) {
  console.log("Positive Number");
} else if (x < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}
let key = "Divya";
switch (key) {
  case "Aman":
    console.log("You bought chips");
    break;
  case "Divya":
    console.log("You bought bread Cake");
    break;
  case "Dharam":
    console.log("You bought chocolate");
    break;

  default:
    console.log("insert the correct value");
    break;
}

// Loops
// For loop

for (x = 0; x < 12; x++) {
  console.log(x);
}

for (let i in myString) {
  console.log(myString[i]);
}

// While Loop
x = 0;
while (x < 100) {
  console.log("in while");
  x++;
}

// Do while

do {
  console.log("in do while");
  x--;
} while (x > 0);
