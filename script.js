// JavaScript code
// const hero = document.querySelector(".hero-content");
// const scrollingSection = document.querySelector(".scrolling-section");

// // Add a scroll event listener
// window.addEventListener("scroll", () => {
//   const scrollPos = window.scrollY || document.documentElement.scrollTop;

//   // Calculate the opacity based on scroll position
//   const opacity = 1 - scrollPos / (hero.offsetHeight / 2);
//   hero.style.opacity = opacity < 0 ? 0 : opacity;
// });
const shareButton = document.querySelector(".share-button");
const shareDialog = document.querySelector(".share-dialog");
const closeButton = document.querySelector(".close-button");

shareButton.addEventListener("click", (event) => {
  shareDialog.classList.add("is-open");
});

closeButton.addEventListener("click", (event) => {
  shareDialog.classList.remove("is-open");
});
gsap.to(".hero-content", {
  y: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: "body",
    scroller: "html",
    // markers:true,
    start: "center 45%",
    end: "bottom 70%",
    scrub: 1,
  },
});

var tl = gsap.timeline();

tl.from(".nav", {
  y: -100,
  duration: 1,
  opacity: 0,
});

// tl.from(".hero-content", {
//   opacity: 0,
//   duration: 1,
// });
