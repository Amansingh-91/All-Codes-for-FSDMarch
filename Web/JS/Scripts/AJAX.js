const getTodos = (resourse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    // console.log(request);
    const stat = document.querySelector("div");
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        let result = JSON.parse(request.responseText);
        resolve(result);
      } else if (request.readyState === 4) {
        reject(request.status + " error occured");
      }
    });

    request.open("GET", resourse);

    request.send();
  });
};

// getTodos("https://jsonplaceholder.typicode.com/todos/", (data, err) => {
//   if (data === undefined) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// const para = (data, err) => {
//   console.log(data);
//   console.log("in calback");
//   console.log(err);
// };
// getTodos("https://jsonplaceholder.typicode.com/todos/1", para);

// const display = (shakeandbake) => {
//   let a = 10;
//   let b = 20;
//   shakeandbake(a, b);
// };

// const shake = (x, y) => {
//   console.log(x + y);
// };
// display(shake);
// display((x, y) => {
//   console.log(x * y);
// });
// call back hell
// getTodos("https://jsonplaceholder.typicode.com/todos/", (data, err) => {
//   if (data === undefined) {
//     console.log(err);
//   } else {
//     console.log(data);

//     getTodos("https://jsonplaceholder.typicode.com/todos/1", (data, err) => {
//       if (data === undefined) {
//         console.log(err);
//       } else {
//         console.log(data);
//         getTodos(
//           "https://jsonplaceholder.typicode.com/todos/2",
//           (data, err) => {
//             if (data === undefined) {
//               console.log(err);
//             } else {
//               console.log(data);
//             }
//           }
//         );
//       }
//     });
//   }
// });

// promises

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("data");
//     reject("err");
//   });
// };

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

getTodos("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => {
    console.log(data);
    return getTodos("https://jsonplaceholder.typicode.com/todos/1");
  })
  .then((data) => {
    console.log("my data");
    console.log(data);
    return getTodos("../JSON/pets.json");
  })
  .then((data) => {
    console.log("in third");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// const x = () => {
//   return 5;
// };
// const y = () => {
//   return x();
// };
// console.log(y());

// getTodos("https://jsonplaceholder.typicode.com/todoss/").then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

const sendTodos = (resourse, data) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    // console.log(request);
    const stat = document.querySelector("div");
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        let result = JSON.parse(request.responseText);
        resolve("success");
      } else if (request.readyState === 4) {
        reject(request.status + " error occured");
      }
    });

    request.open("POST", resourse);

    request.send(data);
  });
};

sendTodos("../JSON/pets.json", { name: "rock" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
