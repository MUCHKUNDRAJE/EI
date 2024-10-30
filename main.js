let div1 = document.querySelectorAll("#div1 h1");

gsap.to(div1,{
    y:-293,
    duration:1,
    delay:1,
    ease:"power2.inOut",
  repeat:-1,
  repeatDelay:2
})
