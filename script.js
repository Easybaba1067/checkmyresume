const mode = document.querySelector(".theme");
const body = document.querySelector("body");
const nav = document.querySelectorAll(".navigator");
const testimonys = document.querySelectorAll(".testimony");
const clickH1 = document.querySelector(".testimonies h1");

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

myClick = 0;
maxSlide = testimonys.length;

function goToSlide(myClick) {
  testimonys.forEach((testimony, i) => {
    testimony.style.transform = `translateX(${150 * (i - myClick)}%)`;
  });
}
goToSlide(myClick);
function slideShow(params) {
  if (myClick === 0) {
    myClick = maxSlide - 1;
  } else {
    myClick--;
  }
  goToSlide(myClick);
}
clickH1.addEventListener("click", slideShow);
setInterval(slideShow, 3000);
