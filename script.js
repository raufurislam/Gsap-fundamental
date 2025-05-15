import { gsap } from "gsap";

gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 720,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 2,
});

gsap.from("#box2", {
  x: 500,
  y: 500,
  duration: 2,
  delay: 1,
});
