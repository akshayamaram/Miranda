const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var timeLine = gsap.timeline();

timeLine.to("#page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

timeLine.to("#page1", {
  y: "30vh",
  duration: 1,
  delay: 1,
});

timeLine.to("#page1", {
  y: "0",
  rotate: 360,
  scale: 1,
  duration: 0.7,
});
