// let myArray = [1, 2, 3, 4];
// console.log(myArray);

// myArray.push(123);
// console.log(myArray);

// let x = myArray.pop();
// console.log(myArray);
// console.log(x);

// // map(), forEach ,filter

// // CallBAck function

// const myfunc = (callBack) => {
//   console.log("in main function");
//   callBack();
// };
// const shakeAndBake = (x, index) => {
//   if (index > 2) {
//     console.log("my value is " + x + " and index is" + index);
//   }
// };

// // myfunc(shakeAndBake);

// // ForEachDemo

// // myArray.forEach(shakeAndBake);

// // console.log(myArray.join(" $ "));

// // myArray.splice(1, 2);
// // console.log(myArray);

// // Objects
// let languages = {
//   computer: ["Java", "C", "C++", "MySql", "Node"],
//   regional: ["english", "hindi", "Punjabi"],
// };
// let myobjArray = [
//   {
//     name: "aman",
//     age: 25,
//     sex: "Male",
//     lang: languages,
//     printDetails: function () {
//       console.log("in print Details" + this.name);
//     },
//   },
//   {
//     name: "Divya",
//     age: 25,
//     sex: "Male",
//     lang: languages,
//     printDetails: function () {
//       console.log("in print Details " + this.name);
//     },
//   },
// ];
// // myObject1.printDetails();

// for (x in myobjArray[0]) {
//   console.log(myobjArray[0][x]);
// }

// myobjArray.forEach((value) => {
//   value.printDetails();
// });
// var x = 30;
// const myfunc = () => {
//   if (true) {
//     var x = 50;
//     console.log(x);
//   }
//   console.log(x);
//   newFunc();
// };
// console.log(x);

// const newFunc = () => {
//   console.log(x);
// };

// myfunc();
// console.log(x);
// var x = 0;
// const parent = () => {
//   let x = 1;
//   const child = () => {
//     let y = 2;
//     x = 2;
//     console.log(x + y);
//   };
//   child();
//   console.log(x);
// };

// parent();

// myfunc();
// function myfunc() {
//   console.log(" in my func");
// }

const outterFunc = (parameterFunc) => {
  console.log("in outter func");
  parameterFunc();
};

const parameterFunc = () => {
  console.log("in call back");
};

const newParameter = () => {
  console.log("in new ");
};
// outterFunc(parameterFunc);
// outterFunc(newParameter);

// const parent = () => {
//   var count = 0;
//   return () => {
//     count += 1;
//     return count;
//   };
// };

// let x = parent();

// outterFunc(parameterFunc);
// outterFunc(newParameter);
// console.log(x());
// console.log(x());
// console.log(x());

const myfunc = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log(i);
};
myfunc();
