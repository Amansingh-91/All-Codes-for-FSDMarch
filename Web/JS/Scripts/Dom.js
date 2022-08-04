const para = document.querySelector("div");

console.log(para);
const allPara = document.querySelectorAll(" p");

console.log(allPara);

// // getElementById()
// const myParaById = document.getElementById("myId");
// console.log(myParaById);

// // getElementsByClassName
// const getByClass = document.getElementsByClassName("error");
// console.log(getByClass);

// // getElementsByTagName

// const allTag = document.getElementsByTagName("p");
// console.log(allTag);

// console.log(Array.from(allTag));

// para.innerText += "I am Aman";

// allPara.forEach((mypara) => {
//   mypara.innerText += " new Text shake and bake";
// });

// myAncor = document.querySelector("a");

// myAncor.innerText = "google Link";

// let x = myAncor.getAttribute("href");
// console.log(x);

// myAncor.setAttribute("href", "http://www.github.com");

// myAncor.setAttribute("target", "_blank");

// myAncor.removeAttribute("target");

// para.setAttribute("style", "background:red;color:white");
// // para.setAttribute("style", "");

// console.log(para.style);

// para.style.width = "100px";
// para.style.height = "100px";

// para.style.width = "";

// para.setAttribute("class", "myclass");

// allPara.forEach((mypara) => {
//   if (mypara.innerText.includes("success")) {
//     mypara.classList.add("success");
//   } else if (mypara.innerText.toLowerCase().includes("error")) {
//     mypara.classList.add("error");
//   }
// });
// para.classList.remove("success");

// para.classList.toggle("success");
// para.classList.toggle("success");

// console.log(para.children);

// const newAncor = document.createElement("a");
// newAncor.setAttribute("href", "https://www.google.com");
// newAncor.innerText = "my new Link Added";

// para.append(newAncor);
// let allChildren = Array.from(para.children);
// console.log(allChildren);

// allChildren.forEach((ele) => {
//   ele.innerText += " shake it";
// });
