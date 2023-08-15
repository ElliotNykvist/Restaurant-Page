window.addEventListener("scroll", function() {
  var scrollTrigger = document.querySelector(".scroll-trigger");
  var nav = document.querySelector(".nav");

  if (window.scrollY > scrollTrigger.offsetTop) {
    nav.classList.add("scrolled-nav");
  } else {
    nav.classList.remove("scrolled-nav");
  }
});