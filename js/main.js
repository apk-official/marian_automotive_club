"use strict";
const contactBtn = document.querySelector("#contact-btn");
const galleryBtn = document.querySelector("#gallery");
const menuOpenIcon = document.querySelector("#burger-icon");
const menuCloseIcon = document.querySelector("#menu-close");
const instaHandle = document.querySelector("#insta");
const event1 = document.querySelector("#event-1");
const event2 = document.querySelector("#event-2");
const event3 = document.querySelector("#event-3");
const event4 = document.querySelector("#event-4");

//*----------------
//*Menu icon change
//*----------------
const navOpen = menuOpenIcon.addEventListener("click", () => {
  if (menuCloseIcon.classList.contains("d-none")) {
    menuOpenIcon.classList.add("d-none");
    menuCloseIcon.classList.remove("d-none");
  }
});
const navClose = menuCloseIcon.addEventListener("click", () => {
  if (menuOpenIcon.classList.contains("d-none")) {
    menuOpenIcon.classList.remove("d-none");
    menuCloseIcon.classList.add("d-none");
  }
});

//*----------------
//*Swiper
//*----------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-right-btn",
    prevEl: ".swiper-left-btn",
  },
});

//*----------------
//*Smooth scrolling
//*----------------
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
//*----------------
//*Navigation of main page
//*----------------
const contact = contactBtn.addEventListener("click", () => {
  window.location.href =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=teamcavalloracing@gmail.com";
});

const gal = galleryBtn.addEventListener("click", () => {
  window.location.href = "/gallery.html";
});
const instagram = instaHandle.addEventListener("click", () => {
  window.location.href =
    "https://instagram.com/marian_automotive_club?igshid=YmMyMTA2M2Y=l";
});

//Event button navigation
//*----------------
//*Event card links
//*----------------

// const newEvent1 = event1.addEventListener("click", () => {
//   window.location.href =
//     "https://instagram.com/marian_automotive_club?igshid=YmMyMTA2M2Y=l";
// });
// const newEvent2 = event2.addEventListener("click", () => {
//   window.location.href =
//     "https://instagram.com/marian_automotive_club?igshid=YmMyMTA2M2Y=l";
// });
// const newEvent3 = event3.addEventListener("click", () => {
//   window.location.href =
//     "https://instagram.com/marian_automotive_club?igshid=YmMyMTA2M2Y=l";
// });
// const newEvent4 = event4.addEventListener("click", () => {
//   window.location.href =
//     "https://instagram.com/marian_automotive_club?igshid=YmMyMTA2M2Y=l";
// });

