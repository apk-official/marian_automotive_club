"use strict";

// js to navigate using href tag 

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const cavallo = document.querySelector("#cavallo");
const contact = document.querySelector("#contact");
const homeBack = document.querySelector("#back-to-home-btn");
const homenav = home.addEventListener("click", () => {
  window.location.href = "/index.html";
});
const aboutnav = about.addEventListener("click", () => {
  window.location.href = "/index.html#about";
});
const cavallonav = cavallo.addEventListener("click", () => {
  window.location.href = "/index.html#cavello";
});
const contactnav = contact.addEventListener("click", () => {
  window.location.href = "/index.html#contact";
});
const backHome = homeBack.addEventListener("click", () => {
  window.location.href = "/index.html";
});