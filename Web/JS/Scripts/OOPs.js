// let userOne = {
//   name: "aman",
//   email: "aman.singh756@gmail.com",
//   login: () => {
//     console.log("you are logged in");
//   },
// };
// let userTwo = {
//   name: "Divya",
//   email: "756@gmail.com",
//   login: () => {
//     console.log("you are logged in");
//   },
// };
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   login = () => {
//     console.log(`${this.name} have successfully logged in`);
//   };
//   logout = () => {
//     console.log(`${this.name} have successfully logged out`);
//   };
// }

// let userOne = new User("aman", "aman.singh756@gmail.com");
// let userTwo = new User("Divya", "Divya.singh756@gmail.com");
// console.log(userOne.login(), userTwo);
// userOne.logout();
// let users = [userOne, userTwo];
// class Admin extends User {
//   constructor(name, email, title) {
//     super(name, email);
//     this.title = title;
//   }
//   deleteUser = (userToRemove) => {
//     users = users.filter((user) => user !== userToRemove);
//   };
// }

// let adminOne = new Admin("dharam", "dharam@gmail.com", "shake and bake");
// console.log(adminOne);
// console.log(users);
// adminOne.deleteUser(userOne);
// console.log(users);

// rest parameter

const sum = (x, y) => x + y;
const sumAll = (arr) => {
  let sum = 0;
  arr.forEach((element) => (sum += element));
  return sum;
};

let arr = [12, 13, 14];
console.log(sumAll(arr));
const sumAllRest = (...numbers) => {
  let sum = 0;
  console.log(numbers);
  numbers.forEach((element) => (sum += element));
  return sum;
};

console.log(sumAllRest(12, 13, 14, 15, 17, 59));

// Spread operator
let arr1 = [1, 2, 3, ...arr];
console.log(arr1);
