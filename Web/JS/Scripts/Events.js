const ul = document.querySelector("ul");

// const add = () => {
//   let myTemp = `<li>
//     newly Added
//     </li>`;
//   ul.innerHTML += myTemp;
// };

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  //   let myTemp = `<li>
  //     newly Added
  //     </li>`;
  //   ul.innerHTML += myTemp;
  e.preventDefault();
  console.log(e);
  let newTodo = document.createElement("li");
  if (e.target.lastElementChild.value.trim() !== "") {
    newTodo.innerText = e.target.lastElementChild.value;
    ul.append(newTodo);
  }
  e.target.reset();
  //   AddEvent(newTodo);
});
// const AddEvent = (todo) => {
//   todo.addEventListener("click", (e) => {
//     // console.log(e.target.parentElement);
//     e.target.remove();
//   });
// };

// const todos = document.querySelectorAll("li");

// // console.log(todos);
// todos.forEach((todo) => {
//   console.log("in here");
//   AddEvent(todo);
// });

ul.addEventListener("click", (e) => {
  console.log(e, "in ul");
  if (e.target.nodeName === "LI") {
    e.target.style.textDecoration = `line-through`;
  }
});

// const li = document.querySelector("li");
// li.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("in li");
// });

let data = window.btoa("Aman");
console.log(data);

let decrypted = window.atob(data);
console.log(decrypted);
