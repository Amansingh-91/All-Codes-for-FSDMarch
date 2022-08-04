const getTodos = (resourse) => {
  return fetch(resourse);
};
// const form = document.querySelector("form");
// const addData = document.querySelector("div.insert ul");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getTodos("https://jsonplaceholder.typicode.com/todos/2")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let title = data.title;
//       let id = data.id;
//       const li = `<li>${title} and  ${id}</li>`;
//       addData.innerHTML += li;
//     })
//     .catch((err) => {
//       console.log("error");
//     });
// });

// const resquest = fetch("https://jsonplaceholder.typicode.com/todos/");
// console.log(resquest);
// const data = resquest
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//async await
const myData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();

  const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  const data1 = await response1.json();
  const response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data2 = await response2.json();

  return data;
  // const response1 = fetch("https://jsonplaceholder.typicode.com/todos/1");
};
console.log(2);
myData().then((data) => {
  console.log(data);
});
console.log(3);
