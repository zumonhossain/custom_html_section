const menuBtn = document.querySelector(".header-main-menu-btn");
const menuItems = document.querySelector(".header-main-menu-items");
const expandBtn = document.querySelectorAll(".header-main-menu-expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});
