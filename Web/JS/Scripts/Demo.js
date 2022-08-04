const form = document.querySelector(".form");
const newImages = document.querySelectorAll(".collapse");
var x = true;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  if (x) {
    e.target.firstElementChild.innerText = "view less";
    x = false;
  } else {
    e.target.firstElementChild.innerText = "view more";
    x = true;
  }
  newImages.forEach((image) => {
    if (e.target.tagName === "FORM") {
      image.classList.toggle("collapse");
    }
  });
});
