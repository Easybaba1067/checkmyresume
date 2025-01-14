const mode = document.querySelector(".theme");
const body = document.querySelector("body");
const nav = document.querySelectorAll(".navigator");

mode.addEventListener("click", () => {
  mode.classList.toggle("active");
  body.classList.toggle("active");
});
nav.forEach((navigator) => {
  navigator.addEventListener("click", (event) => {
    event.preventDefault();
    const id = navigator.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
