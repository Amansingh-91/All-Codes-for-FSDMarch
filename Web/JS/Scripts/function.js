// Function in JS

function greeting() {
  console.log("Hello Everyone");
}

greeting();

// Function with parameters
greeting("Divya", 26);
function greeting(name = "Aman", age = 20) {
  console.log("hello " + name);
  console.log(`hello ${name} with age: ${age}`);
}

// Function with Return Type
console.log(greet(10));
function greet(x, y = 10) {
  return [x, y];
}

// Function as Expressions

const decide = function () {
  console.log("in decide");
};
decide();
// let x = 25 -20
// Arrow Function

var myArrow = () => {
  console.log("in arrow function");
};

myArrow();
// console.log(typeof myArrow);

const sum = (x, y) => x + y;

const even = (x) => x % 2 === 0;
