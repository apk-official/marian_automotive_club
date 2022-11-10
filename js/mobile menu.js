//*Mobile navigation menu opening and hamburgeer icon animation*//
let container = document.querySelector(".container");
let elem1 = document.querySelector(".elem-1");
let elem2 = document.querySelector(".elem-2");
let elem3 = document.querySelector(".elem-3");
let mobNav = document.querySelector("#mobile-nav-container");
let blurLayer = document.querySelector("#blur");
const menuList = document.querySelectorAll(".mobile-main-menu-li");
const headerMenu = document.querySelector("#hero-header");
const mainNav = document.querySelector("#main-nav");
const mobileNavMenu = document.querySelector("#mobile-menu-icon");
const textMenu = document.querySelector(".hero-text");
const open = () => {
  elem1.classList.add("elem-1-cross");
  elem2.classList.add("elem-2-cross");
  elem3.classList.add("elem-3-cross");
  mobNav.classList.add("mobile-nav-visible");
  blurLayer.classList.add("blur-visible");
  elem1.classList.remove("elem-1-burger");
  elem2.classList.remove("elem-2-burger");
  elem3.classList.remove("elem-3-burger");
  blurLayer.classList.remove("blur-hidden");
};
const close = () => {
  elem1.classList.remove("elem-1-cross");
  elem2.classList.remove("elem-2-cross");
  elem3.classList.remove("elem-3-cross");
  mobNav.classList.remove("mobile-nav-visible");
  blurLayer.classList.remove("blur-visible");
  elem1.classList.add("elem-1-burger");
  elem2.classList.add("elem-2-burger");
  elem3.classList.add("elem-3-burger");
  blurLayer.classList.add("blur-hidden");
};

const nav = mobileNavMenu.addEventListener("click", () => {
  mainNav.classList.add("hero-section__mobile-header");
  mobileNavMenu.classList.add("menu-open");
});
container.addEventListener("click", function () {
  if (
    elem1.classList.contains("elem-1-burger") &&
    elem2.classList.contains("elem-2-burger") &&
    elem3.classList.contains("elem-3-burger")
  ) {
    open();
  } else if (
    elem1.classList.contains("elem-1-cross") &&
    elem2.classList.contains("elem-2-cross") &&
    elem3.classList.contains("elem-3-cross")
  ) {
    close();
  }
});
for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener("click", close);
}
