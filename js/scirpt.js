// scroll to top
let up = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= 150) {
    up.style.cssText = "transform : scale(1)";
  } else {
    up.style.cssText = "transform : scale(0)";
  }
};

up.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// toggle
let toggle = document.querySelector(".header .con .icons i.bars");
let menu = document.querySelector(".header .con .links");
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
