const menuBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-visible");
});
