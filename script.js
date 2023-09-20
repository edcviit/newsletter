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

var tl = gsap.timeline();

tl.from(".nav", {
  y: -100,
  duration: 1,
  opacity: 0,
});

gsap.to(".hero-content", {
  opacity: 0,
  y: -70,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -20%",
    scrub: 1,
  },
});
gsap.to(".hero", {
  background:
    "url('https://images.pexels.com/photos/1428169/pexels-photo-1428169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -85%",
    end: "top -95%",
    scrub: 0.1,
  },
});

// tl.from(".hero-content", {
//   opacity: 0,
//   duration: 1,
// });
